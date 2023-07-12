import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect} from "react";
import Keycloak from 'keycloak-js'


function App() {


  let initOptions = {
    url: 'http://14.32.42.32:8088/auth',
    realm: 'Bumin-realm',
    clientId: 'gateway',
    onLoad: 'login-required',
  };
  
  let keycloak = new Keycloak(initOptions);

  
  init();
  
  function init() {
    keycloak.init({
      onLoad: initOptions.onLoad,
    }).then(auth => {
      const ONE_MINUTE = 60000;
    
      if (!auth) {
        window.location.reload();
      } else {
        console.info('Auth ok');
      }

      console.log('keycloak.token')
      console.log(keycloak.token)
    
    
      localStorage.setItem('vue-token', keycloak.token);
      localStorage.setItem('vue-refresh-token', keycloak.refreshToken);
    
      window.setTimeout(refreshToken.bind(null, keycloak), ONE_MINUTE);
    }).catch(() => {
      console.error('Auth Fail');
    })
  }
  
  function refreshToken() {
    keycloak.updateToken(70).success(refreshed => {
      if (refreshed) {
        successRefresh(refreshed);
      } else {
        warnRefresh();
      }
    }).error(errorRefresh);
  }
  
  function successRefresh(refreshed) {
    console.debug('Token refreshed ' + refreshed);
  }
  
  function warnRefresh() {
    //console.warn(`Token not refreshed, valid for 
   // ${Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000)} seconds`);
  }
  
  function errorRefresh() {
    console.error('Failed to refresh token');
  }


  useEffect(() => {

    //keycloakTest();
  
  });
  
  
  const keycloakTest = async() => {
    const res = await axios.get('/admin/realms')
  
    console.log(res)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

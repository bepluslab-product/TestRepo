

import {useEffect} from "react";
import Keycloak from 'keycloak-js'


const Test = () => {


  useEffect(() => {
    let keycloak = new Keycloak({
      url: 'https://172.30.1.58:8091/auth',
      realm: 'bumin-realm',
      clientId: 'security-admin-console'
    });
   
    init(keycloak);

  }, []);
  
  function init(keycloak) {
    keycloak.init(
      {
        checkLoginIframe: false,
        redirectUri: 'http://14.32.42.32:8084/test2',
        //redirectUri: 'http://localhost:3001/test2',
        onLoad: 'login-required',
        //promiseType: 'native'
        //silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`

      }
    ).then(auth => {
      //const ONE_MINUTE = 60000;
    
      if (!auth) {
       // window.location.href = 'http://localhost:3001'
      } else {
        console.info('Auth ok');
      }

      console.log('keycloak.token')
      console.log(keycloak.token)
    
    
      localStorage.setItem('access-token', keycloak.token);
      localStorage.setItem('refresh-token', keycloak.refreshToken);
    
      //window.setTimeout(refreshToken.bind(null, keycloak), ONE_MINUTE);
    }).catch((e) => {
      console.log(e)
      console.error('Auth Fail');
    })
  }
  
  
  


  return (
    <div className="App">
      aaaaaaaaaaaaaaaaaaaa
    </div>
  );
}

export default Test;

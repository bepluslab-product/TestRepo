
import './App.css';

import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

function App() {


  /*let initOptions = {
    url: 'https://172.30.1.58:8191',
    realm: 'bumin-realm',
    clientId: 'security-admin-console',
    checkLoginIframe: false,
    pkceMethod: 'S256', 
    redirectUri: 'https://172.30.1.58:8191/auth/admin/bumin-realm/console/',
   // onLoad: 'login-required',
  };*/
  
  

  
  

  
  
 /* function refreshToken() {
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
  }*/


  //useEffect(() => {

    //keycloakTest();
  
 // });
  
  

  return (
    
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/test2" element={<Test2 />} />
      
    </Routes>
    
  );
}

export default App;

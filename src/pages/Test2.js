
import axios from "axios";
import {useEffect} from "react";
import Keycloak from 'keycloak-js'


const Test2 = () => {


  useEffect(() => {
    keycloakTest();

  }, []);
  
  
  
  
  const keycloakTest = async() => {

    let p_header = {
      Authorization: 'Bearer ' +  localStorage.getItem("access-token")
    }

    const res = await axios.get('/admin/realms', {headers:p_header})
  
    console.log(res)
  }


  return (
    <div className="App">
      bbbbbbbbbbbbbbbbbbbbbbbbbb
    </div>
  );
}

export default Test2;

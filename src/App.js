// import { Routing } from './Routing'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import {AdminLogin} from "./components/admins/adminLogin/AdminLogin"
import {AdminSignup} from "./components/admins/adminSignup/AdminSignup"
import {UserSignup} from "./components/user/userSignup/UserSignup"
import {UserLogin} from "./components/user/userLogin/UserLogin"
import { Restaurant  } from "./components/user/Restaurant/Restaurant";
import { Cards } from "./components/user/Restaurant/Cards";

function App() {
  return (
  //  <Routing/>
  
  <BrowserRouter>
  <Routes>
    <Route path="/" />
    <Route path="/admin/signup" element={<AdminSignup/>}/>
    <Route path="/admin/Login" element={<AdminLogin/>}/>
    <Route path="/user/Login" element={<UserLogin/>}/>
    <Route path="/user/signup" element={<UserSignup/>}/>
    <Route path="/user/Restaurant" element={<Restaurant/>}/>
    <Route path="/user/Restaurant/Cards" element={<Cards/>}/>
  </Routes>
  </BrowserRouter>
 
   
  );
}

export default App;

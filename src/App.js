// import { Routing } from './Routing'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import {AdminLogin} from "./components/admins/adminLogin/AdminLogin"
import {AdminSignup} from "./components/admins/adminSignup/AdminSignup"
import {UserSignup} from "./components/user/userSignup/UserSignup"
import {UserLogin} from "./components/user/userLogin/UserLogin"

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
  </Routes>
  </BrowserRouter>
 
   
  );
}

export default App;

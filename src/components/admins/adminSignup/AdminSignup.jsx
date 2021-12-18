import React,{useState} from 'react'
import { SignUp } from '../../Auth/Auth';
export const AdminSignup = () => {
   // eslint-disable-next-line
    const [username, setUsername] = useState("");   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const clicked = ()=>{
      <SignUp email={email} password={password}/>
    }    
    return (
       <div className="admin">
      <div className="form">
        <div className="Heading">
          <p>START FOR FREE</p>
          <h1>Already Have an Account </h1>
          <p>Login</p>
        </div>
        <div className="inputs">
            <input
          className="input"
            type="username"
            placeholder="Username...."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          className="input"
            type="email"
            placeholder="Email...."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password...."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="summit" onClick={clicked}>Login</button>
      </div>
      <div>

      </div>
    </div>
    );
};
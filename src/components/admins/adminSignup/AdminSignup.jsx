import React,{useState} from 'react'
import { supabase } from '../../../supabaseClient';
export const AdminSignup = () => {
   // eslint-disable-next-line
    const [username, setUsername] = useState("");   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const clicked = async()=>{
      // eslint-disable-next-line
      const { user,  error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      // const {data} =await supabase 
      // .from('profiles')
      // .eq('id',user?.id)
      // .single();
      // if(data){
      //   setUsername(data.username)
      // }

    
    }    
    return (
       <div className="admin">
      <div className="form">
        <div className="Heading">
          <p>START FOR FREE</p>
          <h1>SignUp</h1>
          <a href="/admin/login">Already Have an Account ?</a>
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
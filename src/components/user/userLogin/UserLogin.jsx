import React, {useState} from "react";
import { Login } from "../../Auth/Auth";
// import "./AdminStyle.scss";
export const UserLogin = () => { // eslint-disable-next-line
    const [email, setEmail] = useState("");
    // eslint-disable-next-line
    const [password, setPassword] = useState("");
    const clicked = ()=>{
      <Login email={email}  password={password}/>

    }
    return (
        <div className="admin">
            <div className="form">
                <div className="Heading">
                    <h1>Create new account
                    </h1>
                    <p>Signup</p>
                </div>
                <div className="inputs">
                    <input className="input" type="email" placeholder="Email...."
                        onChange={
                            (e) => setEmail(e.target.value)
                        }/>
                    <input type="password" className="input" placeholder="Password...."
                        onChange={
                            (e) => setPassword(e.target.value)
                        }/>
                </div>
                <button className="btn" type="summit" onClick={clicked}>Login</button>
            </div>
            <div></div>
        </div>
    );
};

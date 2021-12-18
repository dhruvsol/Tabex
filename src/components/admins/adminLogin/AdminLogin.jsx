import React, { useState } from "react";
import "./AdminStyle.scss";
export const AdminLogin = () => {
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  return (
    <div className="admin">
      <div className="form">
        <div className="Heading">
          <p>START FOR FREE</p>
          <h1>Login  Here </h1>
          <p>Signup</p>
        </div>
        <div className="inputs">
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
        <button className="btn" type="summit">Login</button>
      </div>
      <div>

      </div>
    </div>
  );
};

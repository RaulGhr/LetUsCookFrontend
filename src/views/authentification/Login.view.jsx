import React, { useState } from 'react';
import './Login.style.scss';
import logo from '../../assets/images/Image.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-left">
      <div className="logo">
         <img src={logo} alt="LetUsCook Logo" />
        </div>
      </div>
      <div className="login-right">
        <h2>Login to your Account</h2>
        <form onSubmit={handleLogin}>
        <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
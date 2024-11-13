import React, { useState } from 'react';
import './Register.style.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Logica de register - trimite datele către API
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="logo">
          <img src="src/assets/images/Logo.jpeg" alt="LetUsCook Logo" />
          <h1 className="unifrakturmaguntia-regular">LETUSCOOK</h1>

          <p>Cook smart, eat balanced!</p>
        </div>
      </div>
      <div className="register-right">
        <h2>Create your Account</h2>
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
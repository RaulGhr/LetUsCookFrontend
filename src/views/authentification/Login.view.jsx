import React, { useState, useEffect } from 'react';
import './Login.style.scss';
import logo from '../../assets/images/Image.jpeg';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { user, login, isLoading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      await login(email, password);
      navigate('/explore');
    }
    catch (err) {
      setError('Login failed. Please try again.');
    }

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
        {error && <p className="error-message">{error}</p>}

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
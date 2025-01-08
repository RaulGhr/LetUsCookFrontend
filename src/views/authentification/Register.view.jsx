import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.style.scss';
import logo from '../../assets/images/Image.jpeg';
import { useAuth } from '../../contexts/authContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { user, register, isLoading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
  
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }
  
    try {
      await register(username, email, password);
      navigate('/explore');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="logo">
          <img src={logo} alt="LetUsCook Logo" />
        </div>
      </div>
      <div className="register-right">
        <h2>Create your Account</h2>
        <form onSubmit={handleRegister}>
          {error && <p className="error-message">{error}</p>}
          
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
          
          <button type="submit" disabled={isLoading}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

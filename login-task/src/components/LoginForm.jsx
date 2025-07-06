import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30,
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      setResponse(res.data);
      setError('');
    } catch (err) {
      setError('Login failed. Please check credentials.');
    }
  };

   return (
    <div className="login-fullscreen">
      <div className="left-panel">
        <h4>START FOR FREE</h4>
        <h1>
          Create new account<span className="dot">.</span>
        </h1>
        <p>
          Already A Member? <a href="#">Log In</a>
        </p>

    <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

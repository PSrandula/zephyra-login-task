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
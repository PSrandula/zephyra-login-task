import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30,
  });
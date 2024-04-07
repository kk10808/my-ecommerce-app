// SignupForm.js

import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      email.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password must match');
      return;
    }

    // Placeholder signup logic
    alert('Signup successful');
    // Redirect user or perform additional logic here
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={switchToLogin}>Switch to Login</button>
    </div>
  );
};

export default SignupForm;

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
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignup}>Signup</button>
      </div>
      <div>
        <button onClick={switchToLogin}>Switch to Login</button>
      </div>
    </div>
  );
};

export default SignupForm;

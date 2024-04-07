// LoginForm.js

import React, { useState } from 'react';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Placeholder login logic
    if (username === 'test' && password === 'password') {
      alert('Login successful');
      // Redirect user or perform additional logic here
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={switchToSignup}>Switch to Signup</button>
      </div>
    </div>
  );
};

export default LoginForm;

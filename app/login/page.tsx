'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './login.css';
import UserCard from './usercard';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await response.json();

      
      const loggedInUser = usersData.find((user: { username: string; email: string }) => user.username === username && user.email === password);

      if (loggedInUser) {
        console.log('login successful');
        setSuccess(true);
        setError(false);
        setUserData(usersData); 
      
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="btn" type="submit">Login</button>
        
        {error && <p className="error-message">Invalid username or password</p>}
        <div className='user-card-container'>
        {success && userData && <UserCard users={userData} />} 
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

// src/components/ParentLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './parent.css';
import './fee.jsx';
const ParentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function goToStd(){
    navigate("/Std");
  }

  /*const handleLogin = () => {
    // Perform authentication logic here

    // For this example, let's consider a simple username and password check
    if (username === 'parent' && password === 'password') {
      navigate('/parent');
    } else {
      alert('Invalid username or password');
    }
  };*/

  return (
  <>

    <h2>Parent Login</h2>
    <div class="login-container">
      
      <form>
        <label>
         
          <input
            type="text"
            placeholder=' Username:'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          
          <input
            type="password"
            placeholder='Password:'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={goToStd}>
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default ParentLogin;

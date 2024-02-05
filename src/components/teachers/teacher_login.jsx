// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './teacher.css';
const TeacherLogin = () => {
  const navigate=useNavigate();
  function goToMainTeacher(){
    navigate('/MainTeacher');
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useNavigate();

 /* const handleLogin = () => {
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

    <h2>Teacher Login</h2>
    <div class="login-container">
      
      <form>
        <label>
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={goToMainTeacher}>
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default TeacherLogin;

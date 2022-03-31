import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Questions from './components/Questions';

// REACT ROUTER
import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom'

// USER AUTH 
import Login from './components/Login'
import Register from './components/Register'

const Home = () => {

  // USER AUTH
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  
  // May need to set up an error state 
  const getUser = () => {
    axios.get('http://localhost:8000/api/auth/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Token " + token,
      }
    })
    .then((res) => {
      console.log(res);
      setUser(res.data)
    })
    // .catch((err) => console.log(err));
  } 

  // REFERENCE: https://blog.logrocket.com/using-localstorage-react-hooks/

  useEffect(() => {
    // Localstorage gives access to a browser's storage object
    // Returning the value of a specific stored item
    setToken(window.localStorage.getItem('token'))
  }, []) 


  useEffect(() => {
    window.localStorage.setItem("token", token);
    getUser();
  }, [token]); // token token token 

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/login" 
            element={
              <Login 
                tokenProp={{ token, setToken }}
                userProp={{ user, setUser }}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;

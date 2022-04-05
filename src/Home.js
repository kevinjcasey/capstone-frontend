import { useState, useEffect } from 'react';
import axios from 'axios'
import App from './App.css'

// REDUX
import { useSelector } from 'react-redux'

import Question from './components/Question'
import GameStart from './components/GameStart';
import GameEnd from './components/GameEnd';
import Add from './components/Add'
import Header from './components/Header';
import Reducer from './Reducer';

// REACT ROUTER
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

// BULMA
// import 'bulma/css/bulma.min.css';

// USER AUTH 
import Login from './components/Login'
import Register from './components/Register'

const Home = () => {

  // STORE DATA
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)
  
  // PAGE DISPLAY

  let componentPage 

  if (questions.length && questionIndex + 1 <= questions.length) {
    componentPage = <Question />
  } 
  else if (!questions.length) {
    componentPage = <GameStart />
  }
  else {
    componentPage = <GameEnd />
  }

  return (
    <BrowserRouter>
    <div className="hero is-fullheight">
      <Header />
      <Routes>
        <Route path="/add" element={<Add />} />
      </Routes>
      <div>
        <div>{componentPage}</div>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default Home;

// ============================================ //
  // ================ USER AUTH ================= //
  // ============================================ //
  // const [user, setUser] = useState(null)
  // const [token, setToken] = useState('')
  
  // const getUser = () => {
    // axios.get('http://localhost:8000/api/auth/user', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: "Token " + token,
    //   }
    // })
    // .then((res) => {
    //   console.log(res);
    //   setUser(res.data)
    // })
    // .catch((err) => console.log(err));
  // } 

  // REFERENCE: https://blog.logrocket.com/using-localstorage-react-hooks/

  // useEffect(() => {
  //   // Localstorage gives access to a browser's storage object
  //   // Returning the value of a specific stored item
  //   setToken(window.localStorage.getItem('token'))
  // }, []) 


  // useEffect(() => {
  //   window.localStorage.setItem("token", token);
  //   getUser();
  // }, [token]); // token token token 

  // ============================================ //
  // ============================================ //
  // ============================================ //
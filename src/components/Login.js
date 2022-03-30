import React, { useState, useEffect } from 'react'
import { Link }from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit');
  }

  const onChange = (event) => {
    setUsername({[event.target.name]: event.target.value})
    setPassword({[event.target.name]: event.target.value})
  }
  
  
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input 
              type="text"
              name="username"
              onChange={onChange}
              value={username}
            />
          </div>
          <div>
            <label>Username</label>
            <input 
              type="text"
              name="password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div>
            <button type="submit">
              Login
            </button>
          </div>
          <p>
            Don't have an account?
            <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
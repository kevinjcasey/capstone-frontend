// With help from Brad Traversy - https://www.youtube.com/watch?v=EmAc4wQikwY

import React, { useState, useEffect } from 'react'
import Link from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('submit');
  }

  const onChange = (event) => {
    setUsername({[event.target.name]: event.target.value})
    setEmail({[event.target.name]: event.target.value})
    setPassword({[event.target.name]: event.target.value})
    setPassword2({[event.target.name]: event.target.value})
  }
  
  
  return (
    <div>
      <div>
        <h2>Register</h2>
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
              name="email"
              onChange={onChange}
              value={email}
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
            <label>Username</label>
            <input 
              type="text"
              name="password2"
              onChange={onChange}
              value={password2}
            />
          </div>
          <div>
            <button type="submit">
              Register
            </button>
          </div>
          <p>
            Already have an account?
            <Link to='/login'>Regist</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
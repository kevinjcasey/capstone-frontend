import React, { useState, useEffect } from 'react'
import { Link }from 'react-router-dom'
// add useNavigate to return to home page?

const Login = (props) => {

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

  const userLogin = () => {
    axios.post('http://localhost:8000/api/auth/login', {
      username: username,
      password: password,
    })
    .then((res) => {
      // pulling in from Home.js
      props.tokenProp.setToken(res.data.token)
      props.userProp.setUser(res.data.user)
    })
    .catch((err) => console.log(err))
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
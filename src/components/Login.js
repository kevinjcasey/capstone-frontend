// // With help from Brad Traversy - https://www.youtube.com/watch?v=EmAc4wQikwY

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link }from 'react-router-dom'
// import { setSourceMapRange } from 'typescript'
// // add useNavigate to return to home page?

// const Login = (props) => {

//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   // const handleSubmit = (event) => {
//   //   event.preventDefault()
//   //   console.log('submit');
//   // }

//   // const onChange = (event) => {
//   //   setUsername({...username, [event.target.name]: event.target.value})
//   //   setPassword({[event.target.name]: event.target.value})
//   // }

//   // Need to add this to the button
//   // What happens to handleSubmit?
//   const userLogin = () => {
//     axios.post('http://localhost:8000/api/auth/login', {
//       username: username,
//       password: password,
//     })
//     .then((res) => {
//       // pulling in from Home.js
//       props.tokenProp.setToken(res.data.token)
//       props.userProp.setUser(res.data.user)
//     })
//     .catch((err) => console.log(err))
//   }

//   // useEffect(() => {
//   //   userLogin()
//   // }, [])

//   return (
//     <div>
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={userLogin}>
//           <div>
//             <label>Username</label>
//             <input 
//               type="text"
//               name="username"
//               onChange={(event) => {setUsername(event.target.value)}} // Allows input field to change state
//               value={username}
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input 
//               // type="password" // Hides the user input with *****
//               type="text"
//               name="password"
//               onChange={(event) => {setPassword(event.target.value)}}
//               value={password}
//             />
//           </div>
//           <div>
//             <button type="submit">
//               Login
//             </button>
//           </div>
//           <p>
//             Don't have an account?
//             <Link to='/register'>Register</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
import {useState} from 'react'
import Hero from "../Component/Hero";
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!email || !password ){
      alert("Please fill in all fields")
      return
    }

    navigate('/home')
  }

  return (
    <>
      <form className='Container'>
        <Hero pagename = "Login Page" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email" placeholder="Type in your email" />
        <input value= {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type in your password"/>
        <button onClick={handleSubmit} type="submit">Log In</button>
      </form>
      <h1>Login Page</h1>
    </>
  );
}
export default Login;
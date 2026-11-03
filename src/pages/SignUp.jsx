import {useState} from 'react'
import Hero from "../Component/Hero";
import './SignUp.css'
import { useNavigate } from 'react-router-dom'; 

function SignUp() {
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmpassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!fullname || !email || !password || !confirmPassword){
      alert("Please fill in all fields")
      return
    }

    if(password !== confirmPassword) {
      alert("Password does not match")
      return
    }

    navigate('/login')

    fullname("")
    email("")
    password("")
    confirmPassword("")
    
  }
  return (
    <>
      <form className='Container'>
        <Hero pagename = "SignUp Page" />
        <label>
          FullName:
          <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder="Type in your fullName"/>
        </label>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email" placeholder="Type in your email" />
        </label>
        <label>
          Password:
          <input value= {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type in your password"/>
        </label>
        <label>
          Confirm Password: <input value= {confirmPassword} onChange={(e) => setConfirmpassword(e.target.value)} type="password" placeholder="Confirm your password"/>
        </label>
        
        
        
        

        <button onClick = {handleSubmit} type="submit">Sign Up</button>
      </form>
      <h1>SignUp Page</h1>
    </>
  );
}
export default SignUp;
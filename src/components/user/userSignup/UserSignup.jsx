import React,{useState}from 'react'
import {supabase }from '../../../supabaseClient' 
export const UserSignup = () => {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const Signup =async()=>{
     // eslint-disable-next-line
    const { user,  error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
  }
    return (
      <>

          <input type="email" placeholder='email' onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
        <button type='summit' onClick={Signup}> signup</button>
      </>
    )
}

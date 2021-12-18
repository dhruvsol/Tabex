
import {supabase } from '../../supabaseClient.js'

export const SignUp=async({email,password})=>{
     // eslint-disable-next-line
    const { user,  error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

}

export const Login = async({email,password})=>{
     // eslint-disable-next-line
    const { user,  error } = await supabase.auth.signIn({
        email: email,
        password: password,
      })
}


export const Signout =async()=>{
     // eslint-disable-next-line
    const {error} =await supabase.auth.aignOut()
}
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth, loginAction } from '../redux/Slices/AuthSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch<any >();
  const auth_check = useSelector(checkAuth)
  const navigation = useNavigate()

  const formInputs = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null)
}
const loginCredentials:{
  email:string ,
  password:string ,
} = {
  email :'',
  password: ''
}
  const FormSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    loginCredentials.email =formInputs.email.current ? formInputs.email.current?.value : '';
    loginCredentials.password = formInputs.password.current ? formInputs.password.current?.value : ''; 
    if (loginCredentials.email == '' || loginCredentials.password == '') {
      if(loginCredentials.email == ''){
      formInputs.email.current!.style.border = "solid 1px red"
      }
      else{
      formInputs.email.current!.style.border = "none"
      }
      if (loginCredentials.password == '') {
      formInputs.password.current!.style.border = "solid 1px red"
      }
      else{
      formInputs.password.current!.style.border = "none"
      }
   }
   else{
    console.log(loginCredentials)
    dispatch(loginAction(loginCredentials));
    
   
  }
  
}
useEffect(() => {
  if (auth_check) {
    navigation('/') 
   }
   
}, [auth_check])

  
  return (
    <>
    <div className="w-full max-w-[500px] m-auto py-10 px-3">
        <form onSubmit={FormSubmit} className="login-form border-2 bg-[#f2f2f2] border-[#ffffff] rounded-md p-4">
            <h2 className="text-lg font-bold">Login</h2>

            <div className="py-3">
                <div>
                    <label htmlFor="title" className=" font-semibold" >Email</label>
                    <input ref={formInputs.email}  type="email" name="email" id="email" className="" />
                </div>
                <div>
                    <label htmlFor="body" className=" font-semibold" >Password</label>
                    <input ref={formInputs.password}  type="password" name="password" id="password" className="" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="p-2 px-4 border-gray-200 hover:shadow-lg hover:shadow-gray-300 border-2 rounded-md bg-[#f7f5f5]">login</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login

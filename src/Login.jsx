import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
    const navigate = useNavigate();

    const handle =(e)=>{
        e.preventDefault()

        axios.post('https://todo-backend-zl57.onrender.com/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data === "success"){
                navigate('/add')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
        <div className='bg-light text-dark p-4' style={{width:'30%'}}>
            <h1 className='text-center p3 m-3'>Login Here---</h1>
            <form onSubmit={handle}>
            <div className='mb-3'>
                    <label htmlFor="">
                    <strong>Email</strong>
                    </label>
                    <input type="email" name='email' placeholder='Enter Email' className='form-control' 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div> <div className='mb-3'>
                    <label htmlFor="">
                        <strong>Password</strong>
                        </label>
                    <input type="password" name='Password' placeholder='Enter Password' className='form-control' 
                    onClick={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success'>Submit</button>
                    <Link to={'/'} className='btn btn-info mx-2'>Sing Up</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
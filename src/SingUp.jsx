import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SingUp = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
    const navegate = useNavigate();



    const handleAdd = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:3300/signup',{name,email,password})
        .then(result=>{
            console.log(result);
            navegate('/login')
        })
        .catch(error=>console.log(error))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
        <div className='bg-light text-dark p-4 ' style={{width:'30%'}} >
            <h1 className='text-center text dark m-3 p-2'>Sing Up Here!!</h1>
            <form onSubmit={handleAdd}>
                <div className='mb-3'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Enter Name' className='form-control' 
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Enter Email' className='form-control' 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div> <div className='mb-3'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='Password' placeholder='Enter Password' className='form-control' 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className='btn btn-success mx-5 fs-5'>Submit</button>
                    <Link to={'/login'} className='btn btn-info mx-5  text-light fs-5'>Login</Link>
                </div>
            </form>

        </div>

    </div>
  )
}

export default SingUp
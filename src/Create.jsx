import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name,setName] = useState();
    const [date,setDate] = useState();
    const navigate = useNavigate()

    const addhandler = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:3300/add',{name,date})
        .then(result=>{
          console.log(result.data);
          navigate('/view')
        })
        .catch(error=>{
          console.log(error);
        })
        
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-info text-dark vh-100'>
        <div className='bg-light text-dark w-50 p-4'>
            <h2 className='text-center mb-4'>Add Todo</h2>
            <form onSubmit={addhandler}>
            <div className="mb-3">
        <input
          type="text"
          placeholder="Enter Entry"
          className="form-control"
          name="name"
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          name="date"
          onChange={(e)=>setDate(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Add</button>
        <Link to={'/view'} className='btn btn-primary mx-2'>View</Link>
      </div>
            </form>

        </div>

    </div>
  )
}

export default Create
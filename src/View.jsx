import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const View = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3300/')
        .then(reurn=>setUsers(reurn.data))
        .catch(error=>console.log(error))
    },[])
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3300/delete/${id}`)
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white text-dark  p-4' style={{ width: "30%" }}>
                <Link to={'/add'} className='btn btn-info text-light'>Add+</Link>
                <h3 className='text-center fs-4 text-danger'>All Data</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            {/* <th>Date</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            users.map((users)=>{

                         return<tr key={users._id}>
                            <td >{users.name}</td>
                            <td>{users.date}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={(e)=>handleDelete(users._id)}>Delete</button>
                            </td>

                        </tr>
                            })
                    }
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default View
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { api } from '../services/api'
import { Link } from 'react-router-dom'

function Read() {
  const {id} = useParams()

   const [dados, setDados] = useState([])
  
    useEffect(()=>{
      api.get('/users/'+ id)
      .then(res=> {setDados(res.data)
        console.log(res.data);
        
      })
      .catch(error=> console.log(error))
  
    },[id])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 rounded pb-3'>
        <h3>Detail of Users</h3>
        <div className='mb-2'>
          <strong>Name: {dados.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {dados.Email}</strong>
        </div>
        <div className='mb-2'>
          <strong>Phone: {dados.phone}</strong>
        </div>
        
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to={'/'} className='btn btn-primary ms-3'>Back</Link>
      </div>
        
    </div>
  )

}

export default Read
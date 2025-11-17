import React from 'react'
import { useEffect,useState } from 'react'
import { api } from '../services/api'
import { Link } from 'react-router-dom'



function Home() {
  const [dados, setDados] = useState([])

  useEffect(()=>{
    api.get('/users')
    .then(res=> setDados(res.data))

  },[])
  
  const deleteClient = (id)=>{
    api.delete('/users/'+id)
    .then(window.location.reload()
    )
    .catch(err=>console.log(err)
    

    )
  }

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center bg-light vh-100 pt-5'>
      <h1 className="mt-sm-5">List of users</h1>

        
      <div className='w-75 rounded bg-white border shadow p-4'>
        
        <div className='d-flex justify-content-end'>
          <Link to={'/create'} className='btn btn-success'>Add +</Link>
        </div>

        <div className='table-responsive-sm'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              { dados.map((item,index)=>(
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.Email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={`/read/${item.id}`} className='btn  btn-sm btn-info me-2' >Read</Link>
                    <Link to={`/update/${item.id}`} className='btn  btn-sm btn-primary me-2'>Edit</Link>
                    <button className='btn  btn-sm btn-danger' onClick={()=>{deleteClient(item.id)}}>Delete</button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        
      </div>
    </div>
  )
}

export default Home
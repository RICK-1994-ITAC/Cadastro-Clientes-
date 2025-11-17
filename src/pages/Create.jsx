import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'

const schema = yup
.object({
  name:yup.string().required('Nome obrigatório'),
  Email: yup.string().email('email nao é válido').required('email obrigatório'),
  phone: yup.number().min(9,'minimo de 10 caracteres').required('nbn,vb'), 
})
.required()

function Create() {
  const{register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const navigate = useNavigate()

  const onsubmit =  handleSubmit(async (data)=>{
    try {
      await api.post('/users',data)
      console.log(api.users);
      navigate('/')
      
    } catch (error) {
      console.log(error);
      
    }
    
  })

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 rounded'>
        <h1>Add a User</h1>

        <form onSubmit={onsubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input type="text" {...register('name')} placeholder='Enter Name' className='form-control'/>
          </div>
          {errors.name? <p className='w-100 text-danger'>{errors.name.message}</p>:null}

          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="text" {...register('Email')} placeholder='Enter Email' className='form-control'/>
          </div>

          {errors.Email? <p className='w-100 text-danger'>{errors.Email.message}</p>:null}

          <div className='mb-3'>
            <label htmlFor="phone">Phone</label>
            <input type="number" {...register('phone')} placeholder='Enter Phone' className='form-control'/>
          </div>

          {errors.phone? <p className='w-100 text-danger'>{errors.phone.message}</p>:null}

          <button type='submit' className='btn btn-success mb-2'>Submit</button>

          <Link to={'/'} className='btn btn-primary ms-3 mb-2'>Back</Link>
        </form>
      </div>
        
    </div>
  )
}

export default Create
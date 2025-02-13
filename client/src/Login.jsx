import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axiox from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {

       // const [name,setName]=useState()
        const [email,setEmail]=useState()
        const [password,setPassword]=useState()
        const navigate=useNavigate()


        const handleSubmit=(e)=>{
                e.preventDefault()
                axiox.post('http://localhost:3001/login',{email,password}).then(
                    result=> {console.log(result)
                        if(result.data === "success"){
                            
                            navigate('/home')
                        }
                }
                ).catch(
                    err=>console.log(err)
                )
        }



  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className='mb-3'>
                        <lable htmlFor="email">
                            <strong>Name</strong>
                        </lable>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            autoComplete='off'
                            name="email"
                            className='form-control rounded-0'
                            onChange={(e)=>setName(e.target.value)}
                        ></input>

                    </div> */}
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            autoComplete='off'
                            name="email"
                            className='form-control rounded-0'
                            onChange={(e)=>setEmail(e.target.value)}
                        ></input>


                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='off'
                            name="password"
                            className='form-control rounded-0'
                            onChange={(e)=>setPassword(e.target.value)}
                        ></input>


                    </div>
                    <button type='submit' className='btn  btn-success w-100 rounded-0'>
                        Login
                    </button>
                    </form>
                    <p>Don't Have an account</p>
                    <Link to='/register'  className='btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none'>
                        Register
                    </Link>
               

            </div>



    </div>
  )
}

export default Login
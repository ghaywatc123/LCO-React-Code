import React, { useState } from 'react'
import Base from "../core/Base"
import { Link } from 'react-router-dom'
import { signin } from '../auth/helper'

const Signin= () => {
    const [values, setValues] = useState({
        name: "",
        email: "Anant@gmail.com",
        password: "12345",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })
    const {name, email, password,error,success} =values;

  const handleChange = (name) => (event) => {
    setValues({...values, error:false, [name]: event.target.value})
  }

  const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:false, loading: true})
        signin()
  }

    const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div className="alert alert-success" style={{display: success ? "": "none"}}>New account created successfully. Please <Link to="/signin"> login now </Link></div>
            </div>
          </div>
        );
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div className="alert alert-danger" style={{display: error ? "": "none"}}>All fields are compalsary</div>
            </div>
          </div>
        );
      };
    
      const SignInForm = () =>{
        return (
          <div className="row">
             <div className="col-md-6 offset-sm-3 text-left">
               <form>
                  <div className="form-group">
                     <label className="text-light">Email</label>
                     <input className="form-control" value={email} type="text" onChange={handleChange("email")}/>
                  </div>
                  <div className="form-group">
                     <label className="text-light">Password</label>
                     <input className="form-control" value={password} type="password" onChange={handleChange("password")}/>
                  </div>
                  <button className="btn btn-success btn-block" onClick={() => {}}>Login</button>
               </form>
             </div>
          </div>
        )
      }

  return (
    <Base title='Welcome Back' description='Signin Here'>
      {SignInForm()}
     <p className='text-center'>{JSON.stringify(values)}</p> 
    </Base>
  )
}

export default Signin
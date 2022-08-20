import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";


import { signup } from "../auth/helper";

 const Signup =() => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const {name, email, password,error,success} =values;

  const handleChange = (name) => (event) => {
    setValues({...values, error:false, [name]: event.target.value})
  }

  const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:false})
        signup({name, email, password})
        .then((data) => {
            console.log("DATA", data)
            if (data.email === email) {
                setValues({
                  ...values,
                  name: "",
                  password: "",
                  error: "",
                  success: true
                })
            }else{
              setValues({
                ...values,
                error: true,
                success: false
              })
            }
        })
        .catch((e) => console.log(e))
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

  const SignupForm = () =>{
    return (
      <div className="row">
         <div className="col-md-6 offset-sm-3 text-left">
           <form>
              <div className="form-group">
                 <label className="text-light">Name</label>
                 <input className="form-control" value={name} type="text" onChange={handleChange("name")}/>
              </div>
              <div className="form-group">
                 <label className="text-light">Email</label>
                 <input className="form-control" value={email} type="text" onChange={handleChange("email")}/>
              </div>
              <div className="form-group">
                 <label className="text-light">Password</label>
                 <input className="form-control" value={password} type="password" onChange={handleChange("password")}/>
              </div>
              <button className="btn btn-success btn-block" onClick={onSubmit}>Submit</button>
           </form>
         </div>
      </div>
    )
  }

  return (
    <Base title="Signup Page" description="Signup a new user">
      {successMessage()}
      {errorMessage()}
      {SignupForm()}
      <p className="text-white text-center">
        {JSON.stringify(values)}
      </p>
    </Base>
  )
}

export default Signup

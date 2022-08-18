import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";


import { signup } from "../auth/helper";

 const Signup =() => {

  const [values, setValues] = useState({
    Name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const {Name, email, password,error,success} =values;

  const handleChange = (Name) => (event) => {
    setValues({...values, error:false, [Name]: event.target.values})
  }

  const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:false})
        signup({Name, email, password})
        .then((data) => {
            console.log("DATA", data)
        })
        .catch((e) => console.log(e))
  }

  const SignupForm = () =>{
    return (
      <div className="row">
         <div className="col-md-6 offset-sm-3 text-left">
           <form>
              <div className="form-group">
                 <label className="text-light">Name</label>
                 <input className="form-control" value={Name} type="text" onChange={handleChange("Name")}/>
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
      {SignupForm()}
      <p className="text-white text-center">
        {JSON.stringify(values)}
      </p>
    </Base>
  )
}

export default Signup

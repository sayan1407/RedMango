import React, { useState } from 'react'
import { SD_Role } from '../Utility/SD'
import { inputHelper } from '../Helper';

function Register() {
  const[loading,setLoading] = useState(false);
  const[userInput,setUserInput] = useState({
    name : "",
    userName : "",
    password : "",
    role : ""
  })
  const handleUSerInput = (e : React.ChangeEvent<HTMLInputElement  | HTMLSelectElement>) => {
    const tempData = inputHelper(e,userInput);
    setUserInput(tempData);
  }
  return (
    <div className="container text-center">
    <form method="post">
      <h1 className="mt-5">Register</h1>
      <div className="mt-5">
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            name="userName"
            onChange={handleUSerInput}
            required
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name='name'
            onChange={handleUSerInput}
            required
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            onChange={handleUSerInput}
            required
          />
        </div>
        <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
          <select className="form-control form-select" name='role' onChange={handleUSerInput} required>
            <option value="">--Select Role--</option>
            <option value={`${SD_Role.customer}`}>Customer</option>
            <option value={`${SD_Role.admin}`}>Admin</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </div>
    </form>
  </div>
  )
}

export default Register
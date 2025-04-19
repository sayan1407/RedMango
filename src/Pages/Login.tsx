import React, { useState } from 'react'
import { inputHelper } from '../Helper';

function Login() {
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
      <h1 className="mt-5">Login</h1>
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
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            onChange={handleUSerInput}
            required
          />
        </div>
      </div>

      <div className="mt-2">
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "200px" }}
        >
          Login
        </button>
      </div>
    </form>
  </div>
  )
}

export default Login
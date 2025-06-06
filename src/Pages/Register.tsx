import React, { useState } from 'react'
import { SD_Role } from '../Utility/SD'
import { inputHelper, toastNotify } from '../Helper';
import { useRegisterUserMutation } from '../Apis/AuthApi ';
import { apiResponse } from '../Interface';
import MainLoader from '../Components/Page/Common/MainLoader';

function Register() {
  const [registerUser] = useRegisterUserMutation();
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
  const handleSubmit = async (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response : apiResponse = await registerUser({
      name : userInput.name,
      userName : userInput.userName,
      password : userInput.password,
      role : userInput.role
    });
    if(response.data && response.data.isSuccess)
    {
      toastNotify("Registration successfull! Please login to continue");
    }
    else if(response.error)
    {
      toastNotify(response.error.data.errorMessages[0],"error");
    }
    console.log(response)
    setLoading(false);
  }

  return (
    <div className="container text-center">
      {loading && <MainLoader/>}
    <form method="post" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success" disabled={loading}>
          Register
        </button>
      </div>
    </form>
  </div>
  )
}

export default Register
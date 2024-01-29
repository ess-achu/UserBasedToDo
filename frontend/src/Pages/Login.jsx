import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import "../Pages/Styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  var navigate = useNavigate()
  
  //api call
  const loginApi = async (username, password) => {
    await axios
      .post("http://localhost:3000/user/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response)
        if(response.statusText == 'OK'){
          var guid = response.data.data.user.Guid
          navigate('/todo/'+ guid)
        }
      }).catch(err=>{
        console.log(err)
        alert(err.response.data.message)
      });
  };

  //form contents
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.username.length === 0 || values.password.length === 0) {
        alert("Fields cannot be empty");
      }else{
        loginApi(values.username,values.password)
      }
    },
  });

  return (
    <div className="mainContainer">
      <div className="loginContainer">
        <h3>Login</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="formContainer">
            <div className="formElementContainer">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div className="formElementContainer">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

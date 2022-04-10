import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title"> Login</h1>
          <form action="">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" required/>
            </div>
            <div className="input-group">
              <input className="hero-btn" type="submit" value="Login" />
            </div>
          </form>
          <div className="input-group">
            <p className="text">
              New to ema-john?{" "}
              <Link className="form-link" to="/signup">
                Creat as Account
              </Link>
            </p>
          </div>
          <div className="input-group">
            <p>------------------------------Or--------------------------</p>
          </div>
          <div className="input-group">
             <button className="google-btn">Continue With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

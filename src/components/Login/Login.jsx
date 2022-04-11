import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init.jsx";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.form?.pathname || '/';
  
   //email input handle
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
      setPassword(event.target.value)
  }
  if (user) {
    navigate(from, {replace:true})
  }
  const handleUserSignIn = event => {
    event.preventDefault()
     signInWithEmailAndPassword(email, password)
   }

  return (
   
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title"> Login</h1>
          <form onSubmit={handleUserSignIn} action="">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p style={{ color: 'red' }}>{error?.message}</p>
            {
              loading && <p>Loading......</p>
            }
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

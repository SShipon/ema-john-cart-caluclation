import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init.jsx';

const Shipment = () => {
     const [user] = useAuthState(auth)
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [address, setAddress] = useState("");
     const [phone, setPhone] = useState("");
     const [error, setError] = useState("");
     //const navigate = useNavigate();
    
    const handleNameBlur = event => {
         
    }
     const handleEmailBlur = (event) => {
       setEmail(event.target.value);
     };

     const handleAddressBlur = (event) => {
       setAddress(event.target.value);
     };

     const handlePhoneNumberBlur = (event) => {
       setPhone(event.target.value);
    };
      const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
      };

    return (
      <div>
        <div className="form-container">
          <div>
            <h1 className="form-title">Shipping information</h1>
            <form onSubmit={handleCreateUser} action="">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  onBlur={handleNameBlur}
                  type="text"
                  name="name"
                  id=""
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  value={user?.email}
                  readOnly
                  type="email"
                  name="email"
                  id=""
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input
                  onBlur={handleAddressBlur}
                  type="text"
                  name="address"
                  id=""
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="Conform-password">Your Phone Number</label>
                <input
                  onBlur={handlePhoneNumberBlur}
                  type="text"
                  name="Phone"
                  id=""
                  required
                />
              </div>

              <div className="input-group">
                <p style={{ color: "red" }}>{error}</p>
                <input
                  className="hero-btn"
                  type="submit"
                  value="add Shipping"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Shipment;
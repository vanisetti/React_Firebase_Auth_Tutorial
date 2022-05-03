import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";



const ShareCode = () => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <>
      
        <div className="qrtitle">
          Share QR Code <br />
          {user && user.email}
        </div>

        <div style={{ background: 'white', paddingTop: '16px', paddingBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius:'10px', width: '350px'}}>
        <QRCode value="hey" />
        </div>
  
      <Link to = "/create">
          <div className="cumulative">
          <Button className="buttons">
               Submit Cumulative Poll
          </Button>
          </div> 
      </Link>
  
        {/* <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div> */}
  
      </>
    );
  
  };
  
  export default ShareCode;
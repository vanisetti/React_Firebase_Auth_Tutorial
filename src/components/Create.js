import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Create = () => {


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
        Create A Poll <br />
        {user && user.email}
      </div>

      <form className="form">
        <label class ="test" className="labelprompt">Enter your Prompt</label>
         <input type="text" className="inputprompt"/>       
      </form>

    <Link to = "/sharecode">
        <div className="cumulative">
        <Button className="buttons">
             Next
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

export default Create;
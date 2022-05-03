import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
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
      <div className="wtitle">
        Welcome <br />
        {user && user.email}
      </div>

      <Link to = "/create" >
      <div className="d-grid gap-2">
        <Button className="createbutton">
          Create a Poll
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

export default Home;

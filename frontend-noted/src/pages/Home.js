import Styles from '../Styles/Home.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  let navigate = useNavigate();
    return (
        <>
        <div style={{backgroundColor: "#f4d35e"}} id='welcome'>
          <h2 className="d-flex justify-content-center">Welcome to Giftery</h2>
          {/* <p>An about us</p> */}
          </div>
        <div id='btns'>
        <Button variant="primary" onClick={() => {navigate("/login")}} className="btn1">Login</Button>
        <Button variant="primary" onClick={() => {navigate("/createAcc")}} className="btn1">Create Account</Button>
        </div>
        </>
    );
}

export default Home;
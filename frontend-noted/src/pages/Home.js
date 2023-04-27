import Styles from '../Styles/Home.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
    
    return (
        <>
        <div>
          <div>.</div>
          <div id='description'>
            <h1>Welcome to Noted</h1>
            <p>What we're about</p>
          </div>
          <div>.</div>
          <div id='model'>
            pic, model
          </div>
          <div id='buttons'>
            <button onClick={() => {navigate("/login")}}>Sign-up</button>
            <button onClick={() => {navigate("/createAcc")}}>Create Account</button>
          </div>
        </div>
        </>
    );
}

export default Home;
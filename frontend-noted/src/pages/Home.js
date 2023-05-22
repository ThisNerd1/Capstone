import Styles from '../Styles/Home.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  let navigate = useNavigate();
    return (
        <>
        <div id='container'>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
        <Card.Title>Welcome to Noted</Card.Title>
        <Card.Text>
        What we're about
        </Card.Text>
        <Button variant="primary" onClick={() => {navigate("/login")}}>Login</Button><br />
        <Button variant="primary" onClick={() => {navigate("/createAcc")}}>Create Account</Button>
      </Card.Body>
    </Card>
        </div>
        </>
    );
}

export default Home;
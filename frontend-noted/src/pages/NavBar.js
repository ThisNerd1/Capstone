import Styles from '../Styles/NavBar.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = () => {
    return (
        <>
        <Nav className="justify-content-left" activeKey="/" style={{backgroundColor: "#7fc6a4"}}>
        <Nav.Item>
          <Nav.Link href="/" style={{color: "black"}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/account" style={{color: "black"}}>Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/gifts" style={{color: "black"}}>Create Gift</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" style={{color: "black"}}>About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Steps" style={{color: "black"}}>Steps</Nav.Link>
        </Nav.Item>
      </Nav>
      </>
    );
}

export default NavBar;
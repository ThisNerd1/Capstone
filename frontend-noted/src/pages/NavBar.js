import Styles from '../Styles/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/gifts">Gift List</Link></li>
            <img src='' alt='icon'></img>
        </ul>
        </nav>
    );
}

export default NavBar;
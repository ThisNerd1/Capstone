import { Link } from "react-router-dom";


const AccountPage = () => {
    return (
        <>
        <div id='createForm'>
        <form >
            <label className='label'>First Name: </label><input id="name" name='name' type="text"  placholder="name" ></input><br /> 
            <label className='label'>Last Name: </label><input id="username" name='name' type="text"  placholder="username"></input><br />
            <label className='label'>Email: </label><input id="username" name='name' type="text"  placholder="username" ></input><br />
            <label className='label'>Username: </label><input id="username" name='name' type="text"  placholder="username" ></input><br />
            <label className='label'>Password: </label><input id="username" name='name' type="text" placholder="username" ></input><br />
        <button>Edit Account</button><br />
        <button>Delete Account</button><br />
        <button>Logout</button><br />
        </form>
        <Link to="/gifts">gift lists made</Link><br />
        <button>New gift list</button>
        </div>
        </>
    );
}

export default AccountPage;
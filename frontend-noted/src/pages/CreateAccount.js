import Styles from '../Styles/CreateAccount.css';
import React, {useState} from 'react';

const CreateAccount = () => {
    //data
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    //updates the values
    function fnameChange(e){
        const newData = {...fname};
        newData[e.target.id] = e.target.value;
        setfname(newData);
    }
    function lnameChange(e){
        const newData = {...lname};
        newData[e.target.id] = e.target.value;
        setlname(newData);
    }
    function emailChange(e){
        const newData = {...email};
        newData[e.target.id] = e.target.value;
        setemail(newData);
    }
    function usernameChange(e){
        const newData = {...username};
        newData[e.target.id] = e.target.value;
        setusername(newData);
    }
    function passwordChange(e){
        const newData = {...password};
        newData[e.target.id] = e.target.value;
        setpassword(newData);
    }    
    //Submit Function that sends to backend

    

    return (
        <>
        <h4>Create Account</h4>
        <div id='createForm'>
        <form >
            <label className='label'>First Name: </label><input id="name" name='name' type="text"  placholder="name" ></input><br /> 
            <label className='label'>Last Name: </label><input id="username" name='name' type="text"  placholder="username"></input><br />
            <label className='label'>Email: </label><input id="username" name='name' type="text"  placholder="username" ></input><br />
            <label className='label'>Username: </label><input id="username" name='name' type="text"  placholder="username" ></input><br />
            <label className='label'>Password: </label><input id="username" name='name' type="text" placholder="username" ></input><br />
        <button>Create Account</button>
        </form>
        </div>
        {/* onChange={(e) => handle(e)} */}
        </>
    );
}

export default CreateAccount;
import Styles from '../Styles/CreateAccount.css';
import React, {useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    //data
    let navigate = useNavigate();
    const url = "http://localhost:3001/create";
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const pass_word = /[\!\@\#\$\%\^\&\*\(\)\[\]\{\}\;\:\'\"\<\>\,\.\/\?]/i
    const passwordOne = /.{8,}/i
    const passwordTwo = /[A-Z]/
    const passwordThree = /[0-9]/

    //email verification for gift list download 

    const validatePassword = () => {
        if (!pass_word.test(password.value)||!passwordOne.test(password.value)||!passwordTwo.test(password.value)||!passwordThree.test(password.value)) {
            console.log('You need 8 characters for the password: one capitalized letter, one digit, and one special character.');
        }
    };


    //updates the values
    function fnameChange(e){
        const newData = {...fname};
        newData[e.target.id] = e.target.value;
        setfname(newData);
        //console.log(newData);
    }
    function lnameChange(e){
        const newData = {...lname};
        newData[e.target.id] = e.target.value;
        setlname(newData);
        //console.log(newData);
    }
    function emailChange(e){
        const newData = {...email};
        newData[e.target.id] = e.target.value;
        setemail(newData);
        //console.log(newData);
    }
    function usernameChange(e){
        const newData = {...username};
        newData[e.target.id] = e.target.value;
        setusername(newData);
        //console.log(newData);
    }
    function passwordChange(e){
        const newData = {...password};
        newData[e.target.id] = e.target.value;
        setpassword(newData);
        //console.log(newData);
    }    
    
    //Submit Function that sends to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password}
        try {
            // const response = await axios.post(url, data);
            // console.log(response);
            axios({
                method: "post",
                url: "http://localhost:3001/create",
                data: data,
                headers: { "Content-Type": "Application/JSON" },
            })
                .then(function (response) {
                  //handle success
                if(response.status === 200){
                    console.log("sucessful response");
                    console.log(response)
                    navigate("/account");
                }else if(response.status === 400) {
                    navigate("/createAcc");
                    alert("That account exists, please try another username!");
                }else{
                    navigate("/createAcc");
                }
                })
                .catch(function (response) {
                  //handle error
                console.log("there has been an error")
                console.log(response);
                }); 
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log("there has been an error")
                console.log(error);
            }
        }
        return false;
    };

    return (
        <>
        <div style={{backgroundColor: "#f4d35e"}} id='welcome'>
        <h4>Create Account</h4>
        <form onSubmit={handleSubmit}>
            <label className='label'>First Name: </label><input id="firstName" name='firstName' type="text"  placholder="First name" onChange={(e) => fnameChange(e)}></input><br /> 
            <label className='label'>Last Name: </label><input id="lastName" name='lastName' type="text"  placholder="Last Name" onChange={(e) => lnameChange(e)}></input><br />
            <label className='label'>Email: </label><input id="email" name='email' type='email'  placholder="Email"  onChange={(e) => emailChange(e)}></input><br />
            <label className='label'>Username: </label><input id="username" name='username' type="text"  placholder="Username" onChange={(e) => usernameChange(e)}></input><br />
            <label className='label'>Password: </label><input id="password" name='password' type="text" placholder="Password" onChange={(e) => passwordChange(e)}></input><br />
        <button>Create Account</button>
        </form>
        </div>
        </>
    );
}

export default CreateAccount;
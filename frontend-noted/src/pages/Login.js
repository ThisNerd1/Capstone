import Styles from '../Styles/Login.css';
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    //data
    let navigate = useNavigate();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    //updates data as user types
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
        let data = {
            username: username,
            password: password}
        try {
            axios({
                method: "post",
                url: "http://localhost:3001/login",
                data: data,
                headers: { "Content-Type": "Application/JSON" },
            })
                .then(function (response) {
                if(response.status === 200){
                    console.log("sucessful response");
                    navigate("/account");
                }else{
                    navigate("/createAcc");
                }
                //console.log("It was successful");
                //console.log(response);
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
        <h4>Login</h4>
        <div id='loginForm'>
            <form onSubmit={handleSubmit}>
                <label className='label'>Username: </label><input id="username" name='username' type="text"  placholder="username" onChange={(e) => usernameChange(e)}></input><br />
                <label className='label'>Password: </label><input id="password" name='password' type="text" placholder="password" onChange={(e) => passwordChange(e)}></input><br />
                <button>Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;
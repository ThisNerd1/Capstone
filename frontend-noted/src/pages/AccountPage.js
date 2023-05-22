import { Link } from "react-router-dom";
import React, {useState} from 'react';
import axios from 'axios';
//import { render } from 'react-dom';
//import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const AccountPage = () => {
    let navigate = useNavigate();
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





    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password}
        try {
            axios({
                method: "post",
                url: "http://localhost:3001/logout",
                data: data,
                headers: { "Content-Type": "Application/JSON" },
            })
                .then(function (response) {
                  //handle success
                if(response.status === 200){
                    console.log("sucessful response");
                    console.log(response)
                    navigate("/login");
                }else if(response.status === 400) {
                    navigate("*");
                    alert("Something messed up!");
                }else{
                    navigate("/gifts");
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
        <div id='createForm'>
        <form >
            {/* <label className='label'>First Name: </label><input id="name" name='name' type="text"  placholder="name" ></input><br /> 
            <label className='label'>Last Name: </label><input id="username" name='name' type="text"  placholder="username"></input><br />
            <label className='label'>Email: </label><input id="username" name='name' type="text"  placholder="username" ></input><br />
            <label className='label'>Username: </label><input id="username" name='name' type="text"  placholder="username" ></input><br />
            <label className='label'>Password: </label><input id="username" name='name' type="text" placholder="username" ></input><br /> */}
        {/* <button>Edit Account</button><br />
        <button>Delete Account</button><br /> */}
        <button onClick={handleSubmit}>Logout</button><br />
        </form>
        <Link to="/gifts">gift lists made</Link><br />
        <button>New gift list</button>
        </div>
        </>
    );
}

export default AccountPage;
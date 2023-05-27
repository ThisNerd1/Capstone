import styles from '../Styles/GiftList.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";



const GiftLists = () => {
    let navigate = useNavigate();
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [For, setFor] = useState('');
    const [giftListName, setgiftListName] = useState('');
    const [search, setSearch] = useState([]);
    const [username, setUsername] = useState('');
    const [searchParams] = useSearchParams();
    const [getLists, setGetLists] = useState('');
    //showing/hiding stuff
    const [isShown, setIsShown] = useState(false);

    useEffect(()=>{
        setUsername(searchParams.get("username"));
        console.log("username: " + username);
    },[username]);

    // useEffect(() => {
    //     console.log("GET LISTSL CHANGED:", getLists);
    // }, [getLists])
    
    function giftChange(e){
        const newData = {...giftListName};
        newData[e.target.id] = e.target.value;
        setgiftListName(newData);
        //console.log(newData);
    }
    function productNameChange(e){
        const newData = {...productName};
        newData[e.target.id] = e.target.value;
        setproductName(newData);
        //console.log(newData);
    }
    function productPriceChange(e){
        const newData = {...productPrice};
        newData[e.target.id] = e.target.value;
        setproductPrice(newData);
        //console.log(newData);
    }
    function whoForChange(e){
        const newData = {...For};
        newData[e.target.id] = e.target.value;
        setFor(newData);
        //console.log(newData);
    }
    function searchChange(e){
        const newData = {...search};
        newData[e.target.id] = e.target.value;
        setSearch(newData);
        //console.log(newData);
    }

    let data = {
        giftListName: giftListName,
        product:{
            product_name: productName,
            product_price: productPrice
        },
        For: For,
        user: username
    }

    //sending
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios({
                method: "post",
                url: "http://localhost:3001/nameList",
                data: data,
                headers: { "Content-Type": "Application/JSON" },
            })
                .then(function (response) {
                console.log(response)
                if(response.status === 200){
                    console.log("sucessful response");
                    console.log(response.data)
                    search.push(response.data)
                    setSearch(search)
                   // navigate("/home");
                }else{
                    console.log(response)
                    // navigate("/gifts");
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

    useEffect(()=>{
        handleList();
    },[]);

    //Searching
    const handleList = async (e) => {
        //e.preventDefault();
        try {
            axios({
                method: "post",
                url: "http://localhost:3001/list/" + username,
                data: data,
                headers: { "Content-Type": "Application/JSON" },
            })
                .then(function (response) {
                console.log(response)
                if(response.status === 200){
                    console.log("sucessful response");
                    console.log(response.data)
                    var lists = response.data;
                    setGetLists(lists);
                    console.log("uhh")
                   // navigate("/home");
                }else{
                    console.log(response)
                    // navigate("/gifts");
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

    const TextFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(data)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile2.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <>
        <div id='steps'>
            steps maybe
        </div>
        <div id="GiftListName"></div>
        <h2>Create my list:</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='name of list' id='giftlistName' name='giftlistName' onChange={(e) => giftChange(e)}/>
            <input type='text' placeholder='name of gift' id='productName' name='productName' onChange={(e) => productNameChange(e)}/>
            <input type='text' placeholder='price of gift' id='productPrice' name='productPrice' onChange={(e) => productPriceChange(e)}/>
            <input type='text' placeholder='For...' id='For' name='For' onChange={(e) => whoForChange(e)} />
        <button>Create</button>
        </form>
        <h2>Find my list:</h2>
        <div>
            <button onClick={handleList}>Search</button>
            <div>
            {   
                getLists ? 
                getLists?.map((getLists) => (
                    <div className="data" key={getLists.id}>
                        <div>
                        <h3>List Name: {getLists.Name} For: {getLists.For}</h3>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                )) : 
                <h3>No data yet</h3> 
            }
            </div>
            {/* <button onClick={() => {navigate("/edit")}}>Edit List</button>
            <button onClick={() => {navigate("/delete")}}>Delete List</button>
            <button onClick={() => {navigate("/add")}}>Add to List</button>
            <button onClick={() => {navigate("/download")}}>Take me to Download List page</button> */}
            <button onClick={TextFile}>Download list</button>
        </div>
        </>
    );
}

export default GiftLists;
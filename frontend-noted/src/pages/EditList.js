import styles from '../Styles/GiftList.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const EditList = () => {
    let navigate = useNavigate();
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [For, setFor] = useState('');
    const [giftListName, setgiftListName] = useState('');
    const [search, setSearch] = useState([]);
    const [username, setUsername] = useState('');
    const [searchParams] = useSearchParams();
    const [getLists, setGetLists] = useState('');

    useEffect(()=>{
        setUsername(searchParams.get("username"));
        console.log("username: " + username);
    },[username]);

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

    return (
        <>
        <div id='steps'>
            steps on how
        </div>
        <div id="GiftListName"></div>
        <h2>Edit my list:</h2>
        <form >
            <input type='text' placeholder='name of list' id='giftlistName' name='giftlistName' onChange={(e) => giftChange(e)}/>
            <input type='text' placeholder='name of gift' id='productName' name='productName' onChange={(e) => productNameChange(e)}/>
            <input type='text' placeholder='price of gift' id='productPrice' name='productPrice' onChange={(e) => productPriceChange(e)}/>
            <input type='text' placeholder='For...' id='For' name='For' onChange={(e) => whoForChange(e)} />
        <button>Edit</button>
        </form>
        <h2>Find my list:</h2>
        <div>
            {/* <form > */}
            <input type='text' placeholder='name of list' id='giftlistName' name='giftlistName' onChange={(e) => giftChange(e)}/>
            <input type='text' placeholder='name of gift' id='productName' name='productName' onChange={(e) => productNameChange(e)}/>
            <input type='text' placeholder='price of gift' id='productPrice' name='productPrice' onChange={(e) => productPriceChange(e)}/>
            <input type='text' placeholder='For...' id='For' name='For' onChange={(e) => whoForChange(e)} />
            <button >Search</button>
            {/* </form> */}
            <div>
            {   
                getLists ? 
                getLists?.map((getLists) => (
                    <div className="data" key={getLists.id}>
                        <h3>List Name: {getLists.Name}</h3>
                    </div>
                )) : 
                <h3>No data yet</h3> 
            }
            </div>
            <button>Download my List</button>
            {/* <button>Edit List</button> */}
            <button>Delete List</button>
        </div>
        </>
    );
}

export default EditList;


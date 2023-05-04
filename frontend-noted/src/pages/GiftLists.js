import styles from '../Styles/GiftList.css';
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GiftLists = () => {
    let navigate = useNavigate();
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [For, setFor] = useState('');
    const [giftListName, setgiftListName] = useState('');

    //showing/hiding stuff
    const [isShown, setIsShown] = useState(false);
    
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            giftListName: giftListName,
            product:{
                product_name: productName,
                product_price: productPrice
            },
            For: For
        }
        try {
            axios({
                method: "post",
                url: "http://localhost:3001/nameList",
                data: data,
                headers: { "Content-Type": "Application/JSON" },
            })
                .then(function (response) {
                  //handle success
                console.log(response)
                if(response.status === 200){
                    console.log("sucessful response");
                    navigate("/home");
                    //redirect("http://localhost:3000/account");
                }else{
                    //redirect("http://localhost:3000/createAcc");
                    console.log(response)
                    navigate("/gifts");
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
        {/* <div id='steps'>
            steps maybe
        </div> */}
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='name of list' id='giftlistName' name='giftlistName' onChange={(e) => giftChange(e)}/>
            <input type='text' placeholder='name of gift' id='productName' name='productName' onChange={(e) => productNameChange(e)}/>
            <input type='text' placeholder='price of gift' id='productPrice' name='productPrice' onChange={(e) => productPriceChange(e)}/>
            <input type='text' placeholder='For...' id='For' name='For' onChange={(e) => whoForChange(e)} />
        <button>Submit</button>
        </form>
        </>
    );
}

export default GiftLists;
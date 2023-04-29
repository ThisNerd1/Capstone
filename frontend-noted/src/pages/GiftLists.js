import styles from '../Styles/GiftList.css';
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GiftLists = () => {
    let navigate = useNavigate();
    //dislikes
    const [foodDislike, setfoodDislike] = useState('');
    const [colorDislike, setcolorDislike] = useState('');
    const [clothesDislike, setclothesDislike] = useState('');
    //likes
    const [foodLike, setfoodLike] = useState('');
    const [colorLike, setcolorLike] = useState('');
    const [clothesLike, setclothesLike] = useState('');


    function foodDislikeChange(e){
        const newData = {...foodDislike};
        newData[e.target.id] = e.target.value;
        setfoodDislike(newData);
        console.log(newData);
    }

    function colorDislikeChange(e){
        const newData = {...colorDislike};
        newData[e.target.id] = e.target.value;
        setcolorDislike(newData);
        console.log(newData);
    }

    function clothesDislikeChange(e){
        const newData = {...clothesDislike};
        newData[e.target.id] = e.target.value;
        setclothesDislike(newData);
        console.log(newData);
    }

    function foodLikeChange(e){
        const newData = {...foodLike};
        newData[e.target.id] = e.target.value;
        setfoodLike(newData);
        console.log(newData);
    }

    function colorLikeChange(e){
        const newData = {...colorLike};
        newData[e.target.id] = e.target.value;
        setcolorLike(newData);
        console.log(newData);
    }

    function clothesLikeChange(e){
        const newData = {...clothesLike};
        newData[e.target.id] = e.target.value;
        setclothesLike(newData);
        console.log(newData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            foodDislike: foodDislike,
            colorDislike: clothesDislike,
            clothesDislike: clothesDislike,
            foodLike: foodLike,
            colorLike: colorLike,
            clothesLike: clothesLike
        }
        try {
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
                    navigate("/account");
                    //redirect("http://localhost:3000/account");
                }else{
                    //redirect("http://localhost:3000/createAcc");
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
        <div id='steps'>
            steps maybe
        </div>
        <form id='listCreation' onSubmit={handleSubmit}>
            {/* <div id="radioBtn">
            <h5>Gift list For:</h5>
        <input type="radio" value="" name="gender" />Mom
        <input type="radio" value="" name="gender" />Dad
        <input type="radio" value="" name="gender" />Friend
        <input type="radio" value="" name="gender" />Boyfriend
        <input type="radio" value="" name="gender" />Girlfriend
        <input type="radio" value="" name="gender" />Other
            </div> */}
        <div id='badPreferences'>
        <h5>What do they <strong>NOT</strong> like:</h5>
        <label>Food Dislike:</label><input type='text' id='foodDislike' name='foodDislike' placeholder='food dislikes' onChange={(e) => foodDislikeChange(e)}></input>
        <label>Color Dislike:</label><input type='text' id='colorDislike' name='colorDislike' placeholder='color dislikes' onChange={(e) => colorDislikeChange(e)}/>
        <label>Clothes Dislike:</label><input type='text' id='clothesDislike' name='clothesDislike' placeholder='clothes dislikes' onChange={(e) => clothesDislikeChange(e)}/>
        {/* <label>One thing they hate:</label><input type='text' placeholder='I hate...'/> */}
        </div>
        <div id='goodPreferences'>
        <h5>What do they like:</h5>
        <label>Food like:</label><input type='text'  id='foodLike' name='foodLike' placeholder='food' onChange={(e) => foodLikeChange(e)}></input>
        <label>Color like:</label><input type='text'  id='colorLike' name='colorLike' placeholder='color' onChange={(e) => colorLikeChange(e)}/>
        <label>Clothes like:</label><input type='text'  id='clothesLike' name='clothesLike' placeholder='clothes' onChange={(e) => clothesLikeChange(e)}/>
        {/* <label>One thing they love:</label><input type='text' placeholder='I love...'/> */}
        </div>
        <button>Create List</button>
        </form>
        </>
    );
}

export default GiftLists;
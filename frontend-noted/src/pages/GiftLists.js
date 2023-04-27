import styles from '../Styles/GiftList.css';

const GiftLists = () => {
    return (
        <>
        <div id='steps'>
            steps maybe
        </div>
        <div id='listCreation'>
            <h5>Gift list For:</h5>
        <input type="radio" value="" name="gender" />Mom
        <input type="radio" value="" name="gender" />Dad
        <input type="radio" value="" name="gender" />Friend
        <input type="radio" value="" name="gender" />Other
        <div id='badPreferences'>
        <h5>What do they <strong>NOT</strong> like:</h5>
        <label>Food Dislike:</label><input type='text' placeholder='food'></input>
        <label>Color Dislike:</label><input type='text' placeholder='color'/>
        <label>Clothes Dislike:</label><input type='text' placeholder='clothes'/>
        <label>One thing they hate:</label><input type='text' placeholder='I hate...'/>
        </div>
        <div id='goodPreferences'>
        <h5>What do they like:</h5>
        <label>Food like:</label><input type='text' placeholder='food'></input>
        <label>Color like:</label><input type='text' placeholder='color'/>
        <label>Clothes like:</label><input type='text' placeholder='clothes'/>
        <label>One thing they love:</label><input type='text' placeholder='I love...'/>
        </div>
        <button>Create List</button>
        </div>
        </>
    );
}

export default GiftLists;
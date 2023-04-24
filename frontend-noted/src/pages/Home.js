const Home = () => {

    const createAcc = () => {
        alert("Account creation button!");
    }

    return (
        <>
        <div>
        <div>
            <p>loerm ipsum</p>
        </div>
        <button onClick={createAcc}>Create Account</button>
        <button>Login</button>
        </div>
        </>
    );
}

export default Home;
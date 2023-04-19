const Home = () => {
    return (
        <>
        <div>
        <h4>Create Account</h4>
        <form id="createAcc" method="POST" action="http://localhost:3001/register">
            <label>First Name: </label><input placeholder="first name"></input><br></br>
            <label>Last Name: </label><input placeholder="last name"></input><br></br>
            <label>Username: </label><input placeholder="username"></input><br></br>
            <label>Password: </label><input placeholder="password"></input><br></br>
            <label>Email: </label><input placeholder="email"></input><br></br>
            <button>Create Account</button>
        </form>
        </div>
        <h4>Login</h4>
        <div>
        <label>First Name: </label><input placeholder="first name"></input>
        <label>Password: </label><input placeholder="password"></input><br></br>
        <label>OR</label><br></br>
        <label>Username: </label><input placeholder="username"></input>
        <label>Password: </label><input placeholder="password"></input>
        <button>Login</button>
        </div>
        </>
    );
}

export default Home;
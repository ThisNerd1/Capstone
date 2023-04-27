import Styles from '../Styles/Login.css';

const Login = () => {
    return (
        <>
        <h4>Login</h4>
        <div id='loginForm'>
            <form>
                <label className='label'>Username: </label><input id="name" name='name' type="text"  placholder="name" ></input><br />
                <label className='label'>Password: </label><input id="username" name='name' type="text" placholder="username"></input><br />
                <button>Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');
var bodyParser = require('body-parser');

//let salt = bcrypt.genSaltSync(10);

const app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressSession({
//    secret: 'W3b15n1c5',
//    saveUninitialized: true,
//    resave: true
//}));
app.set('views', path.join("../../frontend-noted/src/", 'pages')); 
let urlendcodedParser  = express.urlencoded({extended: false});

app.post('/register', async (req, res) => {
    console.log("hit endpoint");
    console.log("First Name: " + req.body.first_name)
    console.log("Last Name: " + req.body.last_name)
    console.log("UserName: " + req.body.username)
    console.log("Password: " + req.body.password)
    console.log("Email: " + req.body.email)
    await server.InsertUser({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    res.status(200).send("we did it boi!");
    // res.redirect("http://localhost:3000/gifts")
});

app.listen(3001, () => {
    console.log("I hear ya man.")
});
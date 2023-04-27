const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./Routes/routes.js');
const expressSession = require('express-session');
const cors = require('cors');
var bodyParser = require('body-parser');


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
app.use(expressSession({secret: "Shh", saveUninitialized: false, resave: false}))
//app.set('view engine', 'jsx');

// app.set('views', __dirname + '/pages');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.set('views', path.join("../../frontend-noted/src/", 'pages')); 
let urlendcodedParser  = express.urlencoded({extended: false});


//api endpoints
// app.get('/', (req, res) => {
//     res.send('Hello, World!');//works
// });

app.get('/', (req, res) => {
    console.log("redirecting....")
    res.redirect('http://localhost:3000/')
})

app.post('/create', urlendcodedParser,(req, res, next)=>{
    //console.log("hit create post endpoint!")
    //console.log("New user created!");
    //console.log("First Name: ", req.body.fname);
    //console.log("Last Name: ", req.body.lname);
    //console.log("Email: ", req.body.email);
    //console.log("Username: ", req.body.username);
    //console.log("Password: ", req.body.password);
    next();
}, routes.checkUsername, routes.createAccount);

app.get('/login', (req, res) => {
    res.redirect('http://localhost:3000/createAcc');
});

app.post("/login", urlendcodedParser, (req, res, next) => {
    //console.log("Future login endpoint");
    //console.log("Username: ", req.body.username.username);
    next();
}, routes.login);

app.post("/edit", urlendcodedParser, (req, res, next) => {
    console.log("Future edit endpoint");
});

app.delete("/delete", urlendcodedParser, (req, res, next) => {
    console.log("Future delete endpoint");
});


app.listen(3001, () => {
    console.log("Backend is running fine, for now..")
});
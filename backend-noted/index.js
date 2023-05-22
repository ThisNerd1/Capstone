const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const databaseRoute = require('./mongodatabase.js')
const expressSession = require('express-session');
const cors = require('cors');
var bodyParser = require('body-parser');
const oneDay = 1000 * 60 * 60 * 24;
var session;

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
app.use(expressSession({
    secret: "Shh", 
    saveUninitialized: true, 
    cookie: { maxAge: oneDay }, 
    resave: true,
}))
//app.set('view engine', 'jsx');

// app.set('views', __dirname + '/pages');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.set('views', path.join("../../frontend-noted/src/", 'pages')); 
let urlendcodedParser  = express.urlencoded({extended: false});


//api endpoints
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//create a list
app.post('/create', urlendcodedParser,(req, res, next)=>{
    next();
}, databaseRoute.checkUsername, databaseRoute.createAccount);

//giftList
app.post('/nameList', urlendcodedParser,(req, res, next)=>{
    next();
    //console.log("hello from /nameList");
    //console.log(req.body.giftListName.giftListName);
}, databaseRoute.nameList);


//login account
app.post("/login", urlendcodedParser, (req, res, next) => {
    console.log('login Session id: \n', req.session.id);
    //console.log('login Session cookie: \n', req.session.cookie);
    next();
}, databaseRoute.checkAuth, databaseRoute.login);

//works
app.post('/logout', urlendcodedParser, (req, res, next) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
        } 
        if (req.session = null ){
            res.send("You're already logged out!")
            next()
        }else{
            res.send("logging user out");
            next()
        }
    })
}, databaseRoute.checkAuth, databaseRoute.logout);


//doesn't work yet
app.post("/list/:id", urlendcodedParser, (req, res, next) => {
    //console.log("searching...");
    console.log("username: " + req.params.id);
    next();
}, databaseRoute.findLists);

//doesn't work yet
app.get("/edit", urlendcodedParser, (req, res, next) => {
    console.log("edit endpoint");
    next();
}, databaseRoute.checkAuth, databaseRoute.editList);

app.delete("/delete", urlendcodedParser, (req, res, next) => {
    console.log("Future delete endpoint");
});


app.listen(3001, () => {
    console.log("Backend is running fine, for now..")
});
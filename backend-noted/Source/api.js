const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { decodeBase64 } = require('bcryptjs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
//app.use(expressSession({
//    secret: 'W3b15n1c5',
//    saveUninitialized: true,
//    resave: true
//}));
app.set('views', path.join("../../frontend-noted/src/", 'pages')); 
let urlendcodedParser  = express.urlencoded({extended: false});

//const checkAuth = (req, res, next) => {
//    if(req.session.user && req.session.user.isAuthenticated){
//        next();
//    }else{
//        res.redirect('/home');
//    }
//}

//app.post('/logout', (req,res) => {
//    req.session.destroy(err => {
//        if(err) {
//            console.log(err)
//        }
//        else {
//            res.redirect('/')
//        }
//    })
//})

app.post('/register', (req, res) => {
    console.log("hit endpoint");
    res.redirect('http://localhost:3000/login');
});
// app.get('/register', (req, res) => {
//     console.log("hit endpoint");
//     res.redirect('http://localhost:3000/login');
// });



//app.get('/', routes.index);
//app.post('/', urlendcodedParser, routes.login);
//app.get('/create', routes.create);
//app.post('/create', urlendcodedParser, routes.createAccount);
//app.get('/edit', routes.edit)
//app.post('/edit', urlendcodedParser, routes.editAccount);
app.listen(3001, () => {
    console.log("I hear ya man.")
});


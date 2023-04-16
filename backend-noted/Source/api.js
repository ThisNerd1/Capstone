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

app.get('/login', (req, res) => {
    res.render('login');
});



//app.get('/', routes.index);
//app.post('/', urlendcodedParser, routes.login);
//app.get('/create', routes.create);
//app.post('/create', urlendcodedParser, routes.createAccount);
//app.get('/edit', routes.edit)
//app.post('/edit', urlendcodedParser, routes.editAccount);
app.listen(3000, () => {
    console.log("I hear ya man.")
});


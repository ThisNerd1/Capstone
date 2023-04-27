const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://newUser:newUser@cluster0.46qhw.mongodb.net/NotedDB?retryWrites=true&w=majority", {
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

//mongoose.set('useCreateIndex', true);
//mongoose.set('useFindAndModify', false);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});

let UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    email: String,
}, {
    collection: 'Users'
}); 

let Account = mongoose.model('Users', UserSchema, "Users");

//adds users to database
exports.createAccount = (req, res, next) => {
    try{
        let profile = new Account({
            first_name: req.body.fname.fname,
            last_name: req.body.lname.lname,
            email: req.body.email.email,
            username: req.body.username.username,
            password: req.body.password.password
        });
        profile.password = bcrypt.hashSync(profile.password, salt);
        profile.save()
        console.log(profile);
        res.status(200).send("We got your message!")
    }catch{
        res.status(500).send("I'm sorry, we're experiencing difficulties!")
    }
}

//checks to see if username already exsists, if it does throws an 400 error
exports.checkUsername = (req, res, next) => {
    try{
        const inputUser = {username: req.body.username.username}
            Account.find(inputUser, (err,user) => {
                if(err) throw console.error(err);
                next();
            })
    }catch{
        res.status(400).send("I'm sorry, that username already exsists. Please use a different one.");
    }
}

//logs users in
exports.login = (req,res) => {
    const inputUser = {username: req.body.username.username}
    Account.find(inputUser, (err,user) => {
        if(err) return console.error(err);
        console.log(inputUser);
        console.log(user);
        console.log(user[0].username);
        if(bcrypt.compareSync(req.body.password, user[0].password))
        {
            currentUser = inputUser;
            req.session.user = {
                isAuthenticated: true,
                username: req.body.username
            }
            res.redirect('/account');
        }
        else{
            res.redirect('/');
        }
    })
}
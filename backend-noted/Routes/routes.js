const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://newUser:newUser@cluster0.46qhw.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

//mongoose.set('useCreateIndex', true);
//mongoose.set('useFindAndModify', false);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});

let accountSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    email: String,
}); 

let Account = mongoose.model('Account_Connection', accountSchema);

exports.login = (req,res) => {
    const inputUser = {username: req.body.username}
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
            avatarLink = user[0].avatarLink
            console.log(avatarLink)
            res.redirect('/home');
        }
        else{
            res.redirect('/');
        }
    })
}

exports.createAccount = (req, res) => {
    let profiles = new Account({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    profiles.password = bcrypt.hashSync(profiles.password, salt);
    profiles.save((err, profiles) => {
        if(err) return console.error(err);
        console.log(req.body.username);
    });
    res.redirect('/');
}


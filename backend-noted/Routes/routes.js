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
let salt = bcrypt.genSaltSync(10);
let currentUser = '';

//adds users to database
exports.createAccount = async (req, res, next) => {
    try{
        let password = bcrypt.hashSync(req.body.password.password, salt);
        let profile = new Account({
            first_name: req.body.fname.fname,
            last_name: req.body.lname.lname,
            email: req.body.email.email,
            username: req.body.username.username,
            password: password
        });
        await profile.save()
        console.log(profile);
        res.status(200).send("User created!")
    }catch{
        res.status(500).send("I'm sorry, we're experiencing difficulties!")
    }
}

//checks to see if username already exsists, if it does throws an 400 error
exports.checkUsername = async (req, res, next) => {
    try{
        const inputUser = {username: req.body.username.username}
        await Account.find(inputUser).then(function(documents){
            console.log(documents);
            if(documents.length !== 0){
                throw console.error("");
            }
            next();
        })
    }catch{
        res.status(400).send("I'm sorry, that username already exsists. Please use a different one.");
    }
}

//logs users in
exports.login = async (req, res, next) => {
    const inputUser = {username: req.body.username.username}
    let password = req.body.password.password
    console.log("Username: " + inputUser.username)
    console.log("Password: " + password)
    await Account.find(inputUser).then(function(documents){
        //console.log(documents)
        if(documents.length === 0){
            //console.log("username is incorrect or password is wrong or code broke!");
            res.status(400).send("username is incorrect");
        }else{
            //console.log("hey i think i found your username");
            // console.log(documents)
            
            if(bcrypt.compareSync(password, documents[0].password)){
                currentUser = inputUser;
                    req.session.documents = {
                        isAuthenticated: true,
                        username: req.body.username.username
                    }
            res.status(200).send("gotcha Account");
            }else{
                console.log("umm: ", documents[0].password, "\n");
                console.log("that wasn't it");
                res.status(400).send("Your password was invalid")
            }
        }
    })
}
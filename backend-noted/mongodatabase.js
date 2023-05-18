// Connect to or talk to Mongo
const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://newUser:newUser@cluster0.46qhw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'NotedDB';//serverApi: ServerApiVersion.v1
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);
let currentUser = "";

//adds users to database
exports.createAccount = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(uri);
        const usersCollection = 'Users';
        const db = client.db(dbName);
        const collection = db.collection(usersCollection);
        let saltedPassword = bcrypt.hashSync(req.body.password.password, salt);
        var profile = {
            first_name: req.body.fname.firstName,
            last_name: req.body.lname.lastName,
            email: req.body.email.email,
            username: req.body.username.username,
            password: saltedPassword
        }
        var newUser = await collection.insertOne(profile);
        console.log(newUser);
        res.status(200).send("User created!")
        client.close()
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

exports.checkUsername = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(uri);
        const collectionName = 'Users';
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const checkUser = { username: req.body.username.username }
        let documents = await collection.find(checkUser).toArray()
        console.log(documents);
        if (documents.length > 0) {
            console.log("An account with that username already exsists.");
            res.status(400).send("account exsists")
            client.close()
        } else {
            client.close()
            next();
        }
    } catch (err) {
        console.error(err)
    }
}

exports.checkAuth = async (req, res, next) => {
    const client = await MongoClient.connect(uri);
    const collectionName = 'Users';
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const checkUser = { username: req.body.username.username }
    let userPassword = req.body.password.password;
    let documents = await collection.find(checkUser).toArray()
    if (documents.length > 0) {
        if (bcrypt.compareSync(userPassword, documents[0].password)) {
            //console.log(documents);
            // console.log("-----------------------------------------------");
            // console.log("username: " + req.body.username.username)
            // console.log("checkUsername: " + checkUser.username)
            // console.log("documents[0].username: " + documents[0].username)
            session = req.session;
            session.userid = req.body.username;
            //console.log(req.session)
            res.send('Hey there, welcome ');
            client.close()
        } else {
            console.log('You are not logged in yet! ');
            client.close()
        }
    }
}

exports.login = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(uri);
        const collectionName = 'Users';
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const inputUser = { username: req.body.username.username }
        let userPassword = req.body.password.password;
        documents = await collection.find(inputUser).toArray()
        if (documents.length > 0) {
            if (bcrypt.compareSync(userPassword, documents[0].password)) {
                console.log("Hashed password: " + documents[0].password); //hashed
                console.log("Nonhashed password: " + userPassword); //not hashed
                console.log("User: ");
                console.log(documents)
                currentUser = inputUser.username;
                req.session.documents = {
                    isAuthenticated: true,
                    username: currentUser
                }
                next();
            }
        } else {
            console.log("nope");
        }
    } catch (err) {
        console.error(err);
        console.log("AHHHHHHHH!");
    }
}


exports.logout = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(uri);
        const collectionName = 'Users';
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const inputUser = { username: req.body.username.username }
        let userPassword = req.body.password.password;
        documents = await collection.find(inputUser).toArray()
        if (documents.length > 0) {
            if (bcrypt.compareSync(userPassword, documents[0].password)) {
                console.log("I think session is destroyed.")
                currentUser = inputUser.username;
                req.session.documents = {
                    isAuthenticated: false,
                    username: currentUser
                }
                next();
            }
        } else {
            console.log("Im broken inside");
        }
    } catch (err) {
        console.error(err);
        console.log("AHHHHHHHH!");
    }
}


//gifts 
exports.nameList = async (req, res, next) => {
    const client = await MongoClient.connect(uri);
    const collectionName = 'GiftLists';
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    try {
        let gifts = {
            Name: req.body.giftListName.giftlistName,
            product: {
                product_name: req.body.product.product_name.productName,
                product_price: req.body.product.product_price.productPrice,
            },
            For: req.body.For.For
        };
        var gift = await collection.insertOne(gifts);
        console.log(gift);
        res.status(200).send(gifts);
    } catch (err) {
        console.error(err);
    }
}


exports.editList = async (req, res, next) => {
    const client = await MongoClient.connect(uri);
    const collectionName = 'GiftLists';
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    try {
        let gifts = {
            Name: req.body.giftListName.giftlistName,
            product: {
                product_name: req.body.product.product_name.productName,
                product_price: req.body.product.product_price.productPrice,
            },
            For: req.body.For.For
        };
        var gift = await collection.updateOne(gifts);
        console.log(gift);
        res.send("updated list:" + gifts);
    } catch (err) {
        console.error(err);
    }
}
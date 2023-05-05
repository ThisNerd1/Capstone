// Connect to or talk to Mongo
const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://newUser:newUser@cluster0.46qhw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const dbName = 'NotedDB';//serverApi: ServerApiVersion.v1
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

//adds users to database
exports.createAccount = async (req, res, next) => {
  const client = await MongoClient.connect(uri);
  const collectionName = 'Users';
  try{
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      let password = bcrypt.hashSync(req.body.password.password, salt);
      var profile = {
        first_name: req.body.fname.firstName,
        last_name: req.body.lname.lastName,
        email: req.body.email.email,
        username: req.body.username.username,
        password: password
      }
      var newUser = await collection.insertOne(profile);
      db.close()
      console.log(newUser);
      res.status(200).send("User created!")
  }catch{
      console.log("I'm sorry something went wrong with the user creation, try again");
      //res.status(500).send("I'm sorry, we're experiencing difficulties!")
  }finally{
      client.close();
  }
}

exports.checkUsername = async (req, res, next) => {
  const collectionName = 'Users';
  try{
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const inputUser = {username: req.body.username.username}
      console.log("Username: " + inputUser.username)
      let documents = await collection.find(inputUser).toArray()
          console.log(documents);
          if(documents.at(0)){
            console.log("Found an account with username")
              // throw console.error("");
              db.close()
          }else{
            db.close()
            console.log("Didnt find an account with that username")
          next();
          }
      
  }catch{
      res.status(400).send("I'm sorry, that username already exsists. Please use a different one.");
  }
}

exports.login = async (req, res, next) => {
  const collectionName = 'Users';
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const inputUser = {username: req.body.username.username}
  let password = req.body.password.password
  console.log("Username: " + inputUser.username)
  console.log("Password: " + password)
  documents = await collection.find(inputUser).toArray()
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
  
}

exports.nameList = async (req, res, next) => {
  const client = await MongoClient.connect(uri);
  const collectionName = 'GiftLists';
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try{
      let gifts = {
          Name: req.body.giftListName.giftlistName,
          product:{
              product_name: req.body.product.product_name.productName,
              product_price: req.body.product.product_price.productPrice,
          },
          For: req.body.For.For
      };
      var gift = await collection.insertOne(gifts);
      //await gift.save()
      console.log(gift);
      res.status(200).send("You named your gift list!")
  }catch(err){
      console.error(err);
      res.status(500).send("Oops, something went wrong! mm\n");
  }
}
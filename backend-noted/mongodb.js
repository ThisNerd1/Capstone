// Connect to or talk to Mongo
const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://newUser:newUser@cluster0.46qhw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const dbName = 'NotedDB';//serverApi: ServerApiVersion.v1
const collectionName = 'Users';

//adds users to database
exports.createAccount = async (req, res, next) => {
  const client = await MongoClient.connect(uri);
  try{
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      let password = bcrypt.hashSync(req.body.password.password, salt);
      var profile = {
        first_name: req.body.fname.fname,
        last_name: req.body.lname.lname,
        email: req.body.email.email,
        username: req.body.username.username,
        password: password
      }
      var newUser = await collection.insertOne(profile);
      await profile.save()
      console.log(newUser);
      //res.status(200).send("User created!")
  }catch{
      console.log(e);
      //res.status(500).send("I'm sorry, we're experiencing difficulties!")
  }finally{
      client.close();
  }
}


// exports.DA = {
//     // getAll bulldogs
//     // Don't forget to use async/await properly, to make mongodb driver work synchronously
//     getAll: async function(){
//         console.log("getAll!");

//         // How do we get a client to talk to Mongo?
//         const client = await MongoClient.connect(uri);

//         try{
//             // I need to get the DB I want to work with
//             const db = client.db(dbName);

//             // I need to get the collection I want to work with
//             const collection = db.collection(collectionName);

//             // How do I Read all the bulldog documents?

//             var query = {}; // Will match ALL bulldogs

//             var results = await collection.find(query).toArray();
            
//             console.log("getAll: results!");
//             console.log(results);

//             return results;
//         }catch(e){
//             console.log("DA.getAll: Something Bad Happened!");
//             console.log(e);
//         }finally{
//             client.close();
//         }
//     },
//     // create a bulldog
//     createBulldog: async function(name, age, weight){
//         console.log("createBulldog!");

//         const client = await MongoClient.connect(uri);

//         try{
//             const db = client.db(dbName);
//             const collection = db.collection(collectionName);

//             // Create the new record to pass to mongodb
//             var newBulldog = {
//                 name: name,
//                 age: age,
//                 weight: weight
//             }

//             var results = await collection.insertOne(newBulldog);
            
//             console.log("createBulldog: results!");
//             console.log(results);

//             return results;
//         }catch(e){
//             console.log("DA.createBulldog: Something Bad Happened!");
//             console.log(e);
//         }finally{
//             client.close();
//         }
//     },
//     // delete a bulldog
//     deleteBulldog: async function(id){
//         console.log("deleteBulldog!");

//         const client = await MongoClient.connect(uri);

//         try{
//             const db = client.db(dbName);
//             const collection = db.collection(collectionName);

//             var query = { _id: new ObjectId(id) } // Define what object/objects we want to delete
            
//             var results = await collection.deleteOne(query);

//             console.log("deleteBulldog: results!");
//             console.log(results);

//             return results;
//         }catch(e){
//             console.log("DA.deleteBulldog: Something Bad Happened!");
//             console.log(e);
//         }finally{
//             client.close();
//         }
//     },
//     // update a bulldog
//     updateBulldog: async function(id, name, age){
//         console.log("updateBulldog!");

//         const client = await MongoClient.connect(uri);

//         try{
//             const db = client.db(dbName);
//             const collection = db.collection(collectionName);

//             var query = { _id: new ObjectId(id) } // Define what object/objects we want to update
//             var update = {
//                 $set: {
//                     name: name,
//                     age: age
//                 }
//             }

//             var results = await collection.updateOne(query, update);

//             console.log("updateBulldog: results!");
//             console.log(results);

//             return results;
//         }catch(e){
//             console.log("DA.updateBulldog: Something Bad Happened!");
//             console.log(e);
//         }finally{
//             client.close();
//         }
//     }
// }
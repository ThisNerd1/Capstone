const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://newUser:newUser@cluster0.46qhw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('NotedDB');
    const table = database.collection('Users');
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Daijah' };
    const person = await table.findOne(query);
    console.log(person);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
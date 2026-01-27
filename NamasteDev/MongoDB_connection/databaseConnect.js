const { MongoClient } = require("mongodb");
const url = "mongodb+srv://namaste_dev_db:3laxman10kha97amol@namastedev.epn4gsr.mongodb.net/";
const client = new MongoClient(url);
const dbName = "DevDatabase";

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");
    console.log("database:", db);
    
    //Reading all the documents.
    const findResult = await collection.find({}).toArray();
    // console.log("Found documents=>", findResult);

    return "done."
}

main()
.then(console.log)
.catch(console.log)
.finally(()=> client.close())

const {MongoClient} = require('mongodb');

const MONGO_URL =   "mongodb+srv://parvez:errorlogin@parvez.hcgqer3.mongodb.net/student?retryWrites=true&w=majority";


const client = new MongoClient(MONGO_URL);

await client.connect();

// await listDatabases(client);


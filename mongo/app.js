const { MongoClient } = require('mongodb');
const faker = require("faker");

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost';
const client = new MongoClient(url);

// Database Name
const dbName = 'USERDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    //   const userArr = [];

    //   for (let i = 0; i< 30; i++ ) {
    //     userArr.push({
    //         name: faker.name.findName(),
    //         email: faker.internet.email(),
    //         age: Math.ceil(Math.random() * 100),
    //         address: faker.address.streetName(),
    //         profileImage: faker.image.image
    //     })
    //   }

    //   console.log(userArr);
    //   const response = await collection.insertMany([{
    //     firstName: "Ajeet",
    //     lastName: "Kumar",
    //     age: "test"
    //   }]);
    const response = await collection.find({firstName: {$exists : true}}).toArray();
      console.log(response);

    // the following code examples can be pasted here...
    //   find all the data
    //   const users = await collection.find().toArray();
    // fecth all the users who are above 20 years and below 60 years
    // const users = await collection.find({$and : [{age: {$gt: 20}}, {age: {$lt: 60}}]}).toArray();
    // update users who are below 18 years as minors
    
    // const users = await collection.updateMany({age: {$lt: 18}}, {$set : {minor : true}});

    // find all users are who are minor
    // const users = await collection.find({minor: true}).toArray();

    // delete all the minors and seniro citizens 
    // const users = await collection.deleteMany({$or: [{age: {$gt: 60}}, {age: {$lt: 18}}]});

    // console.log(users);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
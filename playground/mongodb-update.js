//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err) {
       return console.log('unable to connect to mongodb server');
   } 
   console.log('connected to mongodb server');

   const db = client.db('TodoApp');

    //find one and update
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c3e2e995d8f08087e7926fd')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c3dc8693524550ab500533c')
    }, {
        $set: {
            name: 'Tanichka'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

   //close the connection
   //client.close();
});
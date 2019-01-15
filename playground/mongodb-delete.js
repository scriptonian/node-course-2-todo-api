//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err) {
       return console.log('unable to connect to mongodb server');
   } 
   console.log('connected to mongodb server');

   const db = client.db('TodoApp');

   //deletemany
//    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
//        console.log(result);
//    });

   //deleteone
//    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
//         console.log(result);
//    });

    //find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });

   //close the connection
   //client.close();
});
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
   if (err) {
       return console.log('unable to connect to mongodb server');
   } 
   console.log('connected to mongodb server');

   const db = client.db('TodoApp');
   /*
   db.collection('Todos')
    .find({_id: new ObjectID('5c3c775a645f9e0abe06d34d')}).toArray().then((docs) => {
        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2))
   }, (err) => {
       console.log('unable to fetch todos', err)
   });
   */

  db.collection('Users')
  .find({name: 'Tanya'}).toArray().then((users) => {
      console.log('todos');
      console.log(JSON.stringify(users, undefined, 2))
 }, (err) => {
     console.log('unable to fetch todos', err)
 });

   //close the connection
   //client.close();
});
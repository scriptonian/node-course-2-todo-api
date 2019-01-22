const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User}  = require('./../server/models/user');

var id = "z5c45fbc42f894f15a41ff342";
var userID = "5c3f1c6f4ba043df13810dd4";

// if (!ObjectID.isValid(id)) {
//     console.log('Sorry, id not valid');
// }

if (!ObjectID.isValid(userID)) {
    console.log('Sorry, user is not valid');
}

User.findById(userID)
    .then((user) => {
        if(!user) {
            return console.log('user not found')
        }
        console.log(JSON.stringify(user, undefined, 2));
    }, (e) => {
        console.log('user id not present')
    })


// Todo.find({ _id: id })
//     .then((todos) => {
//         console.log('Todos', todos);
//     });

// Todo.findOne({ _id: id })
//     .then((todo) => {
//         console.log('Todo', todo);
//     });

// Todo.findById(id)
//     .then((todo) => {
//         if(!todo) {
//             return console.log('id not found')
//         }
//         console.log('Todo by id', todo);
//     })
//     .catch((e) => {
//         console.log('id not present')
//     });


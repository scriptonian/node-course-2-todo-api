var mongoose = require('mongoose');

//tell mongoose which promise lib you want to use
mongoose.Promise = global.Promise;
//connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};
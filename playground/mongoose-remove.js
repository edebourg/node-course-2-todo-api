const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove({}).then((result) => { });
Todo.findOneAndRemove({_id: '5b180553260604f9ec1503cc'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove().then((result) => { });

Todo.findByIdAndRemove('5b180553260604f9ec1503cc').then((todo) => {
  console.log(todo);
});

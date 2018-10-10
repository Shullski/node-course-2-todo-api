const { MongoClient, ObjectID } = require('mongodb');

var user = { name : 'Mark', age: 25 };
var name = user.name;

console.log(name);

var obj = new ObjectID();
var obj2 = new ObjectID();
var obj3 = new ObjectID();


console.log(obj, obj2, obj3);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if(err) return console.log('Unable to connect to the MongoDB server')
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  //
  // }, (err, result) => {
  //
  //   if(err) return console.log('Unable to insert todo', err);
  //   console.log(JSON.stringify(result.ops, null, 2))
  // });

  db.collection('Users').insertOne({
    name: 'Mark',
    location: 'LA, CA',
    age: 49,

  }, (err, result) => {

    if(err) return console.log('Unable to insert todo', err);
    console.log(result.ops[0]._id.getTimestamp());

  });

  client.close();
});

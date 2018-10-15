const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('Unable to connect to the MongoDB server')
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Users').deleteMany({
  //   name: 'Mark'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteOne({
  //   name: 'Mark'
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5bc49af44953d7a4bc7336ba")
  }).then((result) => {
    console.log(result);
  });
  // client.close();
});

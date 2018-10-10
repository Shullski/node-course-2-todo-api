const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('Unable to connect to the MongoDB server')
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bbe5ddf91bd736673d41b45')
  //
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, null, 2));
  //
  // }, (err) => {
  //   console.log('unable to fetch todos', err)
  // });

  db.collection('Users').find({
    
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, null, 2));

  }, (err) => {
    console.log('unable to fetch todos', err)
  });

  // client.close();
});

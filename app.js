const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
    findDocuments(db, function() {
      client.close();

    });
  });

const insertDocuments = function(db, callback) {
  
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {

     name : "apple",
     score: 8,
     review: "Great Fruit"

    },

    {
       
     name : "orange",
     score: 7,
     review: "Kinda sour"

    }, 

    {

      name : "Banana",
      score: 9,
      review: "Awesome fruit"

    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });

}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
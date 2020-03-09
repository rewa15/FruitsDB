const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple=new Fruit({
	 name : "apple",
     rating: 8,
     review: "Great Fruit"
});

const kiwi=new Fruit({
	 name : "Kiwi",
     rating: 10,
     review: "Awesome fruit"
});

const orange=new Fruit({
	 name : "Orange",
     rating: 7,
     review: "Sour fruit"
});

const banana=new Fruit({
	 name : "Banana",
     rating: 5,
     review: "Weird Texture"
});

var arr=[apple,kiwi,orange,banana];

Fruit.insertMany(arr, function(error, docs) {});

Fruit.find(function(err, fruits)
{
   if(err)
   	console.log(err);
   else
   	console.log(fruits);
});
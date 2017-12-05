// Extern Libraries 
var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://debanhi:123@ds119406.mlab.com:19406/sely', { useMongoClient: true });

// My Libraries 
// ...

// Constants
var router = express.Router();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function () {

});

var ArtistasSchema = mongoose.Schema({
	name: String,
	url: String
});

var ArtistasUrl = mongoose.model('artistas', ArtistasSchema, 'artistas');

/*router.route('/ArtistasUrl').get(function(req,res)
	{
		ArtistasUrl.find({},function(err, ArtistasUrl){
			if (err) return console.log(err);
			res.json(ArtistasUrl);
			console.log(ArtistasUrl);
		})

	})*/


// Routes
//module.exports = router;
module.exports = function(app){

  app.get('/', function(req, res, next){return res.status(200).json({name: "hello"}).end();})

  app.get('/ArtistasUrl', function(req,res)
	{
		ArtistasUrl.find({},function(err, ArtistasUrl){
			if (err) return console.log(err);
			res.json(ArtistasUrl);
			console.log(ArtistasUrl);
		})

	})
};
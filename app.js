var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var router = express.Router();
var app = express();


/*configuration*/
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://amitpanda007:perfect007@ds059712.mongolab.com:59712/tictactoe');

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


/*setting up db Schemas*/
var scoreSchema = mongoose.Schema({
	name : String,
	wins : Number,
	lost : Number
});

var Score = mongoose.model('Score', scoreSchema);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

/*Setting up the router*/
router.route('/api/scores')
	.get(function(req, res) {
		Score.find(function(err, scores) {
			if(err)
				res.send(err);
			res.send(scores);
		});
	})
	.post(jsonParser ,function(req, res) {
		var score = new Score();

		score.name = req.body.name;
		score.wins = req.body.wins;
		score.lost = req.body.lost;

		score.save(function(err) {
			if(err)
				res.send(err);
			res.send({message : 'Score Inserted'});
		});

	});

router.route('/api/scores/:id')
	.get(function(req, res) {
		Score.findOne({_id : req.params.id}, function(err, score) {
			if(err)
				res.send(err);
			res.send(score);
		});
	})
	.put(jsonParser ,function(req, res) {
		Score.findOne({_id : req.params.id}, function(err, score) {
			score.name = req.body.name;
			score.wins = req.body.wins;
			score.lost = req.body.lost;

			score.save(function(err) {
				if(err)
					res.send(err);
				res.send({message : 'Score Updated'});
			});
		});
	})
	.delete(function(req, res) {
		Score.remove({_id: req.params.id}, function(err) {
			if(err)
				res.send(err)
			res.send({message : 'Item Deleted'})
		})
	});



app.use(router);
app.listen(port, console.log('Server Running on http://localhost:3000'));
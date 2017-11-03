var mongoose = require('mongoose'),
	Problems = mongoose.model('Problems');

exports.get_problems = function(req, res) {
	Problems.find({}, function(err, problems) {
		if(err)
			res.send(err);
		res.json(problems);
	});
};

exports.create_problems = function(req, res) {
	var new_problems = new Problems(req.body);
	new_problems.save(function(err, problems) {
		if(err)
			res.send("cannot create problems");
		res.send("was create problems");
	});
};
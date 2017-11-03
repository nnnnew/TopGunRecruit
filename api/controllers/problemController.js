var mongoose = require('mongoose'),
	Problem = mongoose.model('Problems');

exports.get_problems = function(req, res) {
	Problem.find({}, '_id', function(err, problems) {
		if(err)
			res.send(err);
		res.json(problems);
	});
};

exports.create_problems = function(req, res) {
	var new_problems = new Problem(req.body);
	new_problems.save(function(err, problems) {
		if(err)
			res.send("cannot create problem");
		res.send("problem was created");
	});
};

exports.get_id = function(req, res) {
	Problems.find({}, '_id', function(err, result) {
        if(err)
            res.send("cannot get result from the database");
        res.json(result);
    });
};
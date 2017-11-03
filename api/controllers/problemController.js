var mongoose = require('mongoose'),
	Problem = mongoose.model('Problems');

exports.get_problems = function(req, res) {
	Problem.find({}, function(err, problems) {
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
	Problem.find({}, '_id', function(err, result) {
        if(err)
            res.send("cannot get result from the database");
        res.json(result);
    });
};

exports.update_answer = function (req, res) {
	Problem.findByIdAndUpdate(req.body.problem_id,
		{ "$push": {"user_id_solved": req.body.user_id}}, {new: true}, function (err, problem) {
        if(err)
            res.send(err);
        res.json(problem);
    });
};
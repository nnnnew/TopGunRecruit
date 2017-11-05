var mongoose = require('mongoose'),
	Problem = mongoose.model('Problems');

exports.get_problems = function(req, res) {
	Problem.find({}, function(err, problems) {
		if(err){
            res.send(err);
		}
		else{
            res.json(problems);
		}
	});
};

exports.create_problems = function(req, res) {
	var new_problems = new Problem(req.body);
	new_problems.save(function(err, problems) {
		if(err)
			return res.status(500).send("cannot create problem");
		return res.send("problem was created");
	});
};

exports.get_problem = function(req, res) {
	Problem.findById(req.params.id, function(err, result) {
        if(err)
            return res.status(500).send("cannot get result from the database");
        return res.json(result);
    });
};

exports.update_answer = function (req, res) {
	Problem.findByIdAndUpdate(req.body.problem_id,
		{ "$push": {"user_id_solved": req.body.user_id}}, {new: true}, function (err, problem) {
        if(err){
            res.status(500).send(err);
		}
		else{
            res.json(problem);
		}
    });
};

exports.clear_database = function(req, res) {
    Problem.remove({}, function(err) {
        if(err){
            res.status(500).send(err);
		}
    	else{
            res.send('deleted all problems');
		}
    });
};
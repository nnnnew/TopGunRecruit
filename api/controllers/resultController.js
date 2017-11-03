var mongoose = require('mongoose'),
    Result = mongoose.model('Results');

exports.get_result = function(req, res) {
    Result.find({user_id : req.body.user_id}, function(err, results) {
        if(err)
            res.send(err);
        res.json(results);
    });
};

exports.create_result = function(req, res) {
    var new_result = new Result(req.body);
    new_result.save(function(err, results) {
        if(err)
            res.send("cannot create result");
        res.send("result was created");
    });
};
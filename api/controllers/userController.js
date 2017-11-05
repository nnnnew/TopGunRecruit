var mongoose = require('mongoose'),
	User = mongoose.model('Users');

exports.create_user = function(req, res) {
	var new_user = new User(req.body);
	new_user.save(function(err, user) {
		if(err)
           return res.status(500).send('unable to save to database');
		return res.send('user was created');
	});
};

exports.get_users = function(req, res) {
	User.find({}, function(err, user) {
		if(err)
			return res.status(500).send("can't fetch data from database")
		return res.json(user);
	});
};

exports.get_user = function(req, res) {
    User.find({user_id: req.params.user_id}, function(err, user) {
        if(err)
            return res.status(500).send("cannot get result from the database");
        return res.json(user);
    });
};

exports.clear_database = function(req, res) {
	User.remove({}, function(err) {
		if(err)
			return res.status(500).send('err')
		return res.send('deleted all users')
	});
};


var mongoose = require('mongoose'),
	User = mongoose.model('User');

exports.create_user = function(req, res) {
	var new_user = new User(req.body);
	new_user.save(function(err, user) {
		if(err)
			res.send('unable to save to database');
		res.send('user was create');
	});
};

exports.get_users = function(req, res) {
	User.find({}, function(err, user) {
		if(err)
			res.send('cant fetch data from database')
		res.json(user)
	});
};

exports.clear_database = function(req, res) {
	User.remove({}, function(err) {
		if(err)
			res.send('err')
		res.send('deleted all users')
	});
};


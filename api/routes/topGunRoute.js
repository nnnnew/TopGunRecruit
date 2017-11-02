module.exports = function(app) {
	var user = require('../controllers/userController');
	//user routing
	app.route('/users') 
		.post(user.create_user)
		.get(user.get_users);

	app.route('/users/clear_database')
		.delete(user.clear_database);

	
}
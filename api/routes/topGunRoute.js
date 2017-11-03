module.exports = function(app) {
	var user = require('../controllers/userController');
	//user routing
	app.route('/users') 
		.post(user.create_user)
		.get(user.get_users);

	app.route('/users/clear_database')
		.delete(user.clear_database);

	//problems routing
	var problems = require('../controllers/problemsController')
	app.route('/problems/get_problems')
		.get(problems.get_problems);

	app.route('/problems/create_problems')
		.post(problems.create_problems);
}
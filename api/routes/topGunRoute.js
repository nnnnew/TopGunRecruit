module.exports = function(app) {
	var user = require('../controllers/userController');
    var problem = require('../controllers/problemController');
    var result = require('../controllers/resultController')

	//get routing
	app.route('/user')
		.get(user.get_users);

    app.route('/problem')
        .get(problem.get_problems);

    app.route('/result')
		.get(result.get_result);

	//post routing
    app.route('/user/create')
        .post(user.create_user)

	app.route('/problem/create')
		.post(problem.create_problems);

    app.route('/result/create')
        .post(result.create_result);

    //delete routing
    app.route('/users/clear_database')
        .delete(user.clear_database);
}
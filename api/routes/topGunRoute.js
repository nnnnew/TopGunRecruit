module.exports = function(app) {
	var user = require('../controllers/userController');
    var problem = require('../controllers/problemController');

	//get routing
	app.route('/user')
		.get(user.get_users);

    app.route('/user/:user_id')
        .get(user.get_user);

    app.route('/problem')
        .get(problem.get_problems);

    app.route('/problem/:id')
        .get(problem.get_problem);

	//post routing
    app.route('/user/create')
        .post(user.create_user)

	app.route('/problem/create')
		.post(problem.create_problems);

    //update routing
	app.route('/problem/answer')
		.patch(problem.update_answer);

	app.route('/problem/clear_user')
        .patch(problem.clear_user);

    //delete routing
    app.route('/user/clear_database')
        .delete(user.clear_database);

    app.route('/problem/clear_database')
        .delete(problem.clear_database);

    app.route('/problem/:id')
        .delete(problem.delete_problem);
}
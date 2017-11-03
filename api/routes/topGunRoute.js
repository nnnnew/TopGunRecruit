module.exports = function(app) {
	var user = require('../controllers/userController');
    var problem = require('../controllers/problemController');

	//get routing
	app.route('/user')
		.get(user.get_users);

    app.route('/problem')
        .get(problem.get_problems);
    aoo.route('problem/id')
        .get(problem.get_id);

	//post routing
    app.route('/user/create')
        .post(user.create_user)

	app.route('/problem/create')
		.post(problem.create_problems);

    //delete routing
    app.route('/users/clear_database')
        .delete(user.clear_database);
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema ({
	user_ID: {
		type: Number,
		unique: true,
		required: 'Please enter the your student id'
	},
	first_name: {
		type: String,
		required: 'Enter first name of student'
	},
	last_name: {
		type: String,
		required: 'Enter last name of student'
	},
	status: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('Users', UsersSchema);
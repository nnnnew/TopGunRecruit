var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemsSchema = new Schema ({
	problems_detail: {
		type: String,
		required: true
	},
	problems_result: {
		type: String,
		required: true
	},
	problems_score: {
		type: Number,
		required: true
	},
	user_id_solved: {
		type: String
	}
});

module.exports = mongoose.model('Problems', ProblemsSchema);


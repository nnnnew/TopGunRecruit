var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Problems = new Schema ({
	problems_detail: {
		type: String,
		required: true
	},
	problems_result: {
		type: String,
		required: true
	}
});
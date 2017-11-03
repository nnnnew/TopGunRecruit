var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultsSchema = new Schema ({
    problem_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Results', ResultsSchema);
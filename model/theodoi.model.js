var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var theodoiSchema = new Schema({
    idTheoDoi: {
        type: String,
        required: true,
        unique: true
    }
});

var theodoi = mongoose.model('theodoi', userSchema);
module.exports = theodoi;
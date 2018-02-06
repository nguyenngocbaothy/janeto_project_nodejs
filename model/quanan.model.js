var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quananSchema = new Schema({
    tenquan: {
        type: String,
        required: true
    },
    quan: {
        type: String,
        required: true
    },
    thanhpho: {
        type: String,
        required: true
    },
    datnuoc: {
        type: String,
        default: 'VietNam'
    },
    mota: {
        type: String,
    },
    image: {
        type: String,
    },
    stat: {
        type: String,
    }

});

quananSchema.index({ tenquan: 'text', mota: 'text' });

var quanan = mongoose.model('quanan', quananSchema);

module.exports = quanan;
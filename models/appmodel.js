var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({  //baza izgled.

    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean,

});

var appModel1 = mongoose.model('appModel', appSchema); //napravi mongoose model appModel1 po nacrtu appSchema

module.exports = appModel1;  //exportuj taj model.
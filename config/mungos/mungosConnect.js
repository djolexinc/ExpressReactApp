var mongoose = require ('mongoose');
var config = require('../index'); //config folder. u njemu index.js 

module.exports = function()
{
    mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true} ); //podesavanje za mungo
    mongoose.set('useFindAndModify', false); //podesavanja za mungo
}
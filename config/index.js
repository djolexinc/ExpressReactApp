var configValues = require ('./config');  //./ znaci lokalno, posto smo vec lokalno ovo ce da pokupi config .json i postace objekat js

module.exports = { //kad se radi require (index.js ./index) vratice se objekat sa metodom getDbconn

    getDbConnectionString: function(){  //getDBconn ce biti funkcija/metoda koja vraca ovo:
        return "mongodb+srv://"+configValues.uname+":"+configValues.pwd+"@cluster0-yucg3.mongodb.net/test?retryWrites=true&w=majority";
    }
}
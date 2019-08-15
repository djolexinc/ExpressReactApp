var express = require('express');  //zahtevaj modul express 
var bodyParser = require('body-parser');  //body parser
var config = require('./config'); //config folder. u njemu index.js 
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var mungosConn = require('./config/mungos/mungosConnect');
//var testApi = require('./controllers/testApi');

var app = express();  //express okine i napravi app objekat


var port = process.env.port || 5000;  // port, ((process.env.port je nesto dinamic?))

app.use('/assets', express.static(__dirname+'/public'));  // ako se okine asrts nadji u express.static dirname= moj folder/public.
app.set('veiw engine', 'ejs');

app.get('/', function(req,res){
        console.log('logged');
        res.send('send');
});

//mongoose.connect(config.getDbConnectionString());  //ovako se passuje  settings, mozes direkt tamo
//mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true} );
setupController(app);  //prosledi app, da bi mogao da napravi array na trigerovanje /get-a
apiController(app); //prosledi app kontrolerima, da bi mogli da registruju
mungosConn(app);

app.listen(port);  //slusaj gde se pokrece aplikacija


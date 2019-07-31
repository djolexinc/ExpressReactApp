var appModel1= require('../models/appmodel');
var bodyParser = require('body-parser');

module.exports = function(app){

    var allowCrossDomain = function(req, res, next) {  //mora ovo gore,  midlewer za cros-domain
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
             
    app.use(allowCrossDomain);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/test', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.json({name: 'kura'});
    });

    app.get('/api/one/:un', function(req, res){

        appModel1.find({username: req.params.un}, function(err, todos){                   // whaT?
                     if (err) throw err;
                     res.send(todos);
        });

    });
    app.get('/api/one', function(req, res){
        res.send('radi');
        });

    app.get('/api/todo/:id', function(req, res){

        appModel1.find({id: req.params.id}, function(err, todos){                   // whaT?
                     if (err) throw err;
                     res.send(todo);
        });

    });


    app.post('/api/todo', function(req, res){
            if (req.body.id)
            {
                appModel1.findByIdAndUpdate(req.body.id, {todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment}, 
                    function(err, todo){
                    if (err) throw err;
                    res.send('Radi');
                });     
            }
            else
            {
                var newTodo = appModel1 ({
                    username: 'test',
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                });
                newTodo.save(function(err){
                    if (err) throw err;
                    res.send('sucess');
                });
            }
        });
        app.delete('/api/todo', function(req, res){
            appModel1.findByIdAndRemove(req.body.id, function(err){
                if (err) throw err;
                res.send('sucess');
            })
        })

        
    app.post('/api/bool', function(req, res){  
        if (req.body.id)
        {
            appModel1.findByIdAndUpdate(req.body.id, {todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment}, 
                function(err, todo){
                if (err) throw err;
                res.send('Radi');
            });     
        }
        else
        {
            if(req.body.isDone) var isDoneBool = true
            else isDoneBool = false;
            if(req.body.isDone) var hasAttachBool = true
            else hasAttachBool = false;

                var newTodo1 = appModel1 ({
                    username: 'test',
                    todo: 'd',
                    isDone: isDoneBool,
                    hasAttachment: hasAttachBool
                });
                newTodo1.save(function(err){
                    if (err) throw err;
                    res.send('sucess');
                });
        }
    })
    app.post('/api/post1', function(req, res){
        res.send('radi post api');
        console.log(new Date().toLocaleTimeString()+': radi post api');
    })
}
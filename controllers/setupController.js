var appModel1 = require('../models/appmodel');  //ovo je Mongoose mode, znaci moze da mu se dodele neke metode.

module.exports = function(app) {

app.get('/api/dataSetup', function(req, res) {

        var data1 = [
            {
                username: "test",
                todo: "nesto",
                isDone: false,
                attachment: false
            },

            {
                username: "test",
                todo: "Buy milk",
                isDone: false,
                attachment: false
            },
            {
                username: "test3",
                todo: "Feed doge",
                isDone: false,
                attachment: false
            },
            {
                username: "test1",
                todo: "feed kate",
                isDone: false,
                attachment: false
            },
            {
                username: "test",
                todo: "learn node",
                isDone: false,
                attachment: false
            }
        ];

        appModel1.create(data1, function(err, results)
        {
            res.send(results);
        });

    });
    

}

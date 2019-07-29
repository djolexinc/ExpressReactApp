module.exports = function(app) {
    app.get('/api/one', function(req, res){
        res.send('radi');
        });
}
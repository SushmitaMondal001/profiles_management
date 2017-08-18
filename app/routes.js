var Profile = require('./models/data');

module.exports = function(app) {

  app.get('/api/profiles', function(req,res) {
    Profile.find(function(err,profiles){
      if(err)
        res.send(err);
      res.json(profiles);
    });
  });

  app.post('/api/profiles', function(req,res) {
    Profile.create(req.body);
    console.log("post is calling");
    res.status(200);
  })

  // app.get('*',function(req,res) {
  //   res.sendfile('./public/views/index.html');
  // });
};

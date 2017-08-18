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
    //Profile.create(req.body);
    var newProfile = new Profile(req.body);
    newProfile.save(function (err, newProfile) {
      console.log("post is calling");
      if (err) return console.error(err);
      });
    
    res.status(200);
  })

  // app.get('*',function(req,res) {
  //   res.sendfile('./public/views/index.html');
  // });
};

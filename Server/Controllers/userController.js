var models = require('../Database/models');
var Users = models.Users;
var bcrypt = require('bcrypt');

var sendResponse = function(res, query){
  Users.findAll(query).then(function(users){
    if(users.length){
      res.send(users);
    }else{
      res.send({error: 'error no user found'});
    }
  });
};

module.exports.checkUser = function(req, res){
  var userData = req.body;
  var options = {
    where: {
      $or: {
        username:userData.username,
        email: userData.email,
      }
    }
  };
  Users.findAll(options).spread(function(user) {
    if (user) {
      let error = 'unknown error';
      if (user.username === userData.username && user.email === userData.email) {
        error = 'username and email exists already'
      } else if (user.email === userData.email) {
        error = 'email exists already'
      } else if (user.username === userData.username) {
        error = 'username exists already'
      }
      res.send({error})
    } else {
      res.send({success: 'User available'})
    }
  }).catch(function(err){
    res.send(err);
  });
};

module.exports.createUser = function(req, res){
  var userData = req.body;
  var options = {
    where: {
      username:req.body.username,
    },
    defaults: {
      email: req.body.email.toLowerCase(),
      firstName: req.body.firstName.toLowerCase(),
      password: req.body.password,
      }
    };
  Users.findOrCreate(options).spread(function(user, create) {
    if( create) {
    }
    res.send({user:user, created: create});
  }).catch(function(err){
    res.send(err);
  });
};

module.exports.getAllUsers = function(req, res){
  var query = {};
  sendResponse(res, query);
};

module.exports.getOneUser = function(req, res){
  var query = {where: {email: req.params.email}};
  sendResponse(res, query);
};

module.exports.validateUsername = function(username){
  var query = {
    where: {username: username},
    raw: true,
  };
  return Users.findAll(query).spread(function(user){
    if(user){
      return user;
    }else {
      return{error: 'Invalid Username'};
    }
  })
  .catch(function(err){
    return {error: err};
  })
};

module.exports.checkPassword = function(username, password){
  return Users.findAll({where: {
      username: username
      },
      raw: true}).spread(function(user){
      if(user){
        var verified = bcrypt.compareSync(password, user.password);
        if( verified){
          return user;
        }else{
          return{error: 'Username or Password Invalid!'};
        }
      }else{
        return{error: 'Username or Password Invalid!'};
      }
    })
    .catch(function(err){
      return {error: err};
    })
};

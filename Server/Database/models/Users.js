"use strict"

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    username: {type:DataTypes.STRING, unique: true},
    email: {
      type:DataTypes.STRING,
      validate: {isEmail: true},
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      set: function(v) {
      var password = bcrypt.hashSync(v, 5);
      return this.setDataValue('password', password);
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        Users.hasMany(models.SavedGames);
      }
    },
    tableName: 'users'
});

    return Users;
}
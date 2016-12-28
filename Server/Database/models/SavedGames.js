"use strict"

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var SavedGames = sequelize.define('SavedGames', {
    gameType: DataTypes.STRING,
    data: DataTypes.JSON,
  },{
    classMethods: {
      associate: function(models) {
        SavedGames.belongsTo(models.Users);
      }
    },
    tableName: 'savedGames'
});

    return SavedGames;
}
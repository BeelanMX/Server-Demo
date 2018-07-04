'use strict';
module.exports = (sequelize, DataTypes) => {
  var Node = sequelize.define('Node', {
    devEUI: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Node.associate = function(models) {
    // associations can be defined here
    Node.hasMany(models.Downlink, {
      foreignKey: 'devEUI',
      as: 'downlinks',
    });
  };
  return Node;
};

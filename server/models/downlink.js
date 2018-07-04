'use strict';
module.exports = (sequelize, DataTypes) => {
  var Downlink = sequelize.define('Downlink', {
    devEUI: DataTypes.STRING,
    deviceName: DataTypes.STRING,
    time: DataTypes.STRING,
    fCnt: DataTypes.INTEGER,
    data: DataTypes.STRING
  }, {});
  Downlink.associate = function(models) {
    // associations can be defined here
    Downlink.belongsTo(models.Node, {
     foreignKey: 'devEUI',
     onDelete: 'CASCADE'
   });
  };
  return Downlink;
};

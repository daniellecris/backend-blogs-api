'use strict';
const SchemaUser = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {autoIncrement: true, primaryKey: true, type:DataTypes.INTERGER},
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'user' });
    }

  return User;
};

module.exports = SchemaUser;
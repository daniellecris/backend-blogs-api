'use strict';
const SchemaCategory = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {autoIncrement: true, primaryKey: true, type:DataTypes.INTEGER},
    name: DataTypes.STRING,
  });

  return Category;
};

module.exports = SchemaCategory;
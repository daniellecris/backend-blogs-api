'use strict';
const SchemaBlog = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {autoIncrement: true, primaryKey: true, type:DataTypes.INTERGER},
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTERGER,
    published: DataTypes.Date,
    updated: DataTypes.Date,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
    }

  return BlogPost;
};

module.exports = SchemaBlog;

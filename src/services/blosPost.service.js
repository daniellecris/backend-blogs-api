const { BlogPost, User, Category } = require('../database/models');

const error = { status: 404, message: 'Post does not exist' };

const getPost = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User,
         as: 'user',
         attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const getPostId = async (id) => {
  const postId = await BlogPost.findOne({
    include: [
      { model: User,
         as: 'user',
         attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
    where: { id },
  });

  if (!postId) {
    throw error;
  }
  return postId;
};

module.exports = { 
  getPost,
  getPostId,
 };
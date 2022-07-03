const service = require('../services/blosPost.service');

const postController = async (req, res) => {
  const post = await service.getPost();
  return res.status(200).json(post);
};

module.exports = { postController };
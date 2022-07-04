const service = require('../services/blosPost.service');

const postController = async (req, res) => {
  const post = await service.getPost();
  return res.status(200).json(post);
};

const postControllerId = async (req, res) => {
  const postId = await service.getPostId(req.params.id);
  return res.status(200).json(postId);
};

module.exports = {
  postController,
  postControllerId,
};
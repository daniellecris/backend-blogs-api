const service = require('../services/login.service');

const loginController = async (req, res) => {
  const token = await service.loginService(req.body);
  return res.status(200).json(token);
};

module.exports = { loginController };
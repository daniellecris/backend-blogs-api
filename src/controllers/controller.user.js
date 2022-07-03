const service = require('../services/user.service');
const { generateJWTToken } = require('../utils/jwt');

const userController = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image } = req.body;
    
    await service.createUser({ displayName, email, password, image });

    const token = generateJWTToken({ displayName, email, password, image });

  return res.status(201).json({ token });
};

module.exports = { userController };
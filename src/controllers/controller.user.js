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

const usersController = async (req, res) => {
  const users = await service.getUser();
  return res.status(200).json(users);
};

module.exports = { 
  userController,
  usersController,
};
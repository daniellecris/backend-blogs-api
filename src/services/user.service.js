const { User } = require('../database/models');

const error = { status: 409, message: 'User already registered' };
const errorUser = { status: 404, message: 'User does not exist' };

const createUser = async ({
  displayName,
  email,
  password,
  image,
}) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'displayName', 'image'],
    where: { email },
  }); 

  if (user !== null) {
    throw error;
  } 

  return User.create({
    displayName,
    email,
    password,
    image,
  });
};

const getUser = () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserId = async (id) => {
  const users = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!users) {
    throw errorUser;
  }

  return users;
};

module.exports = { 
  createUser,
  getUser,
  getUserId,
};
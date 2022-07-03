const { User } = require('../database/models');

const error = { status: 409, message: 'User already registered' };

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

module.exports = { createUser };
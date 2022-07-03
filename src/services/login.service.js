const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const errorLogin = { status: 400, message: 'Invalid fields' };

const loginService = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'displayName', 'image'],
    where: { email, password },
  });

  if (!user) {
    throw errorLogin;
  }
  
const token = generateJWTToken(user.dataValues);

return { token };
};

module.exports = { loginService };
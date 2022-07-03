const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;
const errorAuth = { status: 401, message: 'jwt malformed' };

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
const generateJWTToken = ({ id, email, displayName, image }) => 
    jwt.sign({ id, email, displayName, image }, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    throw errorAuth;
  }

    try {
        const validate = await jwt.verify(token, TOKEN_SECRET);
        return validate;
    } catch (error) {
        throw errorAuth;
    }
};

module.exports = {
    generateJWTToken,
    authenticateToken,
};
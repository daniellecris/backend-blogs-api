const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
const generateJWTToken = ({ id, email, displayName, image }) => {
 const token = jwt.sign({ id, email, displayName, image }, TOKEN_SECRET, jwtConfig);
 return token;
};

module.exports = {
    generateJWTToken,
};
const { authenticateToken } = require('../utils/jwt');

const errorAuth = { status: 401, message: 'JWT malformed' };

const authenticateMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const user = await authenticateToken(token);
    if (!user) {
      throw errorAuth;
    }
    res.locals.user = user;
    next();
};

module.exports = authenticateMiddleware;
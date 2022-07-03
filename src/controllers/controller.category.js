const service = require('../services/category.service');

const categoryController = async (req, res) => {
  const { name } = req.body;
    
  const categories = await service.createCategory({ name });

  return res.status(201).json(categories);
};

const categoryControllerAll = async (req, res) => {
    const categories = await service.getCartegory();
    return res.status(200).json(categories);
  };

module.exports = { 
  categoryController,
  categoryControllerAll,
};
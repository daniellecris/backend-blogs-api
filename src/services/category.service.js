const { Category } = require('../database/models');

const createCategory = async ({
    name,
  }) => {
    const category = await Category.create({ name });

  return category;
};

const getCartegory = () => {
  const category = Category.findAll();

  return category;
};

module.exports = { 
  createCategory,
  getCartegory,
};
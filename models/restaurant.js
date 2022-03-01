'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      restaurant.belongsTo(models.Review, {
        foreignKey: "restaurantID",
        onDelete: "CASCADE",
      });
      
    }
  }
  restaurant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'restaurant',
  });
  return restaurant;
};
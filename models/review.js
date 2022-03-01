'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Review.hasMany(models.reviewers, {
          foreignKey: 'reviewerID',
          onDelete: 'CASCADE'
      });
        Review.hasMany(models.restaurant, {
        foreignKey: 'restaurantID',
        onDelete: 'CASCADE'
    });
      }
    }
  
  Review.init({
    reviewerID: DataTypes.INTEGER,
      stars: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 5,
        },
      },
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurantID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
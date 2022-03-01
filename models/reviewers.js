'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviewers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reviewers.belongsTo(models.Review, {
        foreignKey: "reviewerID",
        onDelete: "CASCADE",
      });
    }
  }
  reviewers.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      karma: {
        type: DataTypes.INTEGER,
        validate: { min: 0, max: 7 },
      },
      reviewerID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reviewers",
    }
  );
  return reviewers;
};
    
    
    
    
    
    
    
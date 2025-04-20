'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: 'CASCADE',
      });
    }
  }
  Order.init({
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
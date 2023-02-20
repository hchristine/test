import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db";

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

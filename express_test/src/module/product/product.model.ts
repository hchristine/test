import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db";

export function defineProduct() {
    const Product = sequelize.define('product', {
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
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Product;
}

export default defineProduct();
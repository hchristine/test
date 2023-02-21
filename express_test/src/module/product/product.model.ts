import { DataTypes, Sequelize } from "sequelize";

export function defineProduct(sequelize: Sequelize) {
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
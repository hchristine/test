import { Sequelize } from 'sequelize';
import config from '../config';
import { defineProduct } from '../module/product/product.model';

class Database {
  public sequelize: Sequelize;
  // @ts-ignore
  public tables: {
    product: ReturnType<typeof defineProduct>
  } = {};

  constructor() {
    this.sequelize = new Sequelize(config.database.uri, {
      dialect: "postgres"
    });
  }

  connect() {
    return this.sequelize.authenticate();
  }

  syncModels() {
    this.tables.product = defineProduct(this.sequelize);
  }
}


export default new Database();
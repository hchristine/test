import { sequelize } from './db'

export async function connect() {
    await sequelize.authenticate();
    await sequelize.sync();
}
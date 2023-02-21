import express from 'express';
import config from './config';
import db from './database/db';
import { router } from './module/product/product.router';

const app = express();

app.use(express.json());

app.use('/todos', router);

export async function bootstrap() {
    await db.connect();
    console.log("Database connected.");
    await start(config.port);
}

async function start(port: string | number): Promise<void> {
    return new Promise((resolve) => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
            resolve();
        })
    });
}

bootstrap();


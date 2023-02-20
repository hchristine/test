import express from 'express';
import config from './config';
import { router } from './module/product/product.router';
import { connect } from './database/connect';

const app = express();
const port = config.port ?? 3003;
app.use(express.json());
app.use('/products', router);

export async function bootstrap() {
    try {
        await connect();
        console.log("Database connected.")
    }
    catch (error) {
        console.log("Unable to connect to the database: ", error)
    }
}

export async function start(port: string | number): Promise<void> {
    return new Promise((resolve) => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
            resolve();
        })
    });
}

start(port);
bootstrap();


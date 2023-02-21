import { Request, Response } from "express";
import db from "../../database/db";

export async function createProduct(req: Request, res: Response) {
    const { name, title, description, price } = req.body;

    try {
        const product = await db.tables.product.create({
            name,
            title,
            description,
            price
        });

        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

export async function editProduct(req: Request, res: Response) {
    try {
        const { id, title, description } = req.params;
        const product = await db.tables.product.findOne({
            where: { id }
        });

        if (!product) {
            res.status(404).send();
            return;
        }

        await product.update({ title, description }, {
            where: { id }
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).send(error);
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try {
        const product = await db.tables.product.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!product) {
            res.status(404).send();
            return;
        }

        await product.destroy();
        res.status(204).send();
    }
    catch (error) {
        res.status(400).send(error);
    }

}
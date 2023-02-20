import { Request, Response } from "express";

export async function createProduct(req: Request, res: Response) {
    const { name, title, description, price } = req.body;

    try {
        const product = await Product.create({
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

}

export async function deleteProduct(req: Request, res: Response) {
    try {
        const affectedRowsCount = Product.update({
            where: {
                id: req.params.id
            }
        });

        if (affectedRowsCount === 0) {
            res.status(404).send();
            return;
        }
        res.json(product);
    }
    catch (error) {
        res.status(400).send(error);
    }

}
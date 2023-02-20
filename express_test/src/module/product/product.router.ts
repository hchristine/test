import { Router } from "express";
import { createProduct, deleteProduct, editProduct } from "./product.handlers";

export const router = Router();

router.post('/', createProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);

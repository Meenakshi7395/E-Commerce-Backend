import express from "express";
import validator from 'express-validator';
import { authenticateJWT} from "../controllers/users.js";

const  { body } = validator;

const router = express.Router();

import { createItem, getAllItems, getItemById, updateItem, deleteItem} from "../controllers/items.js"

router.get('/',authenticateJWT, getAllItems);
router.post('/', authenticateJWT, createItem);
router.get('/:id',authenticateJWT, getItemById);
router.patch('/:id',authenticateJWT,updateItem);
router.delete('/:id',authenticateJWT, deleteItem);

export default router;
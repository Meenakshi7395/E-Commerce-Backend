import express from "express";
import validator from 'express-validator';
import { authenticateJWT} from "../controllers/users.js";

const  { body } = validator;

const router = express.Router();

import { addToCart, removeFromCart, getCart} from "../controllers/cartItems.js"

router.post('/add', authenticateJWT, addToCart);
router.post('/remove', authenticateJWT, removeFromCart);
router.get('/', authenticateJWT, getCart);

export default router;
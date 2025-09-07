import express from "express";
import validator from 'express-validator';
import { authenticateJWT, loginUser } from "../controllers/users.js";

const  { body } = validator;

const router = express.Router();

import { createUser,getAllUsers,getUserById,updateUser,deleteUser} from "../controllers/users.js"

// Routes
router.post('/login', loginUser);
router.get('/',authenticateJWT, getAllUsers);
router.post('/', authenticateJWT, createUser);
router.get('/:id',authenticateJWT, getUserById);
router.patch('/:id',authenticateJWT,updateUser);
router.delete('/:id',authenticateJWT, deleteUser);

export default router;
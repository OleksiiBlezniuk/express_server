import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const router = Router();

const userController = new UserController();

router.get('/', userController.getUsers);

router.post('/', userController.addUser);

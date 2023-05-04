import { Router } from "express";
import { TodoController } from "../controllers/TodoController";

export const router = Router();

const todosController = new TodoController();

router.get('/', todosController.getTodos);

router.post('/', todosController.addTodo);

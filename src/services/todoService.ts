import { Todo } from "../models/Todo";
import { TodoValues } from "../typedefs";

export class TodosService {
  getAllTodos = async () => {
    const todos = await Todo.findAll();

    return todos;
  }

  addTodo = async (todoValues: TodoValues) => {
    const createTodo = await Todo.create({
      title: todoValues.title,
      completed: todoValues.completed,
      userId: todoValues.userId
    });

    return createTodo;
  }
}


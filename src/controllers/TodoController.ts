import { Request, Response } from 'express';
import { TodosService } from '../services/todoService';
import { TodoValues } from '../typedefs';
import { UsersService } from '../services/userService';
import { Todo } from '../models/Todo';

export class TodoController {
  protected readonly todosService: TodosService;
  private readonly usersService: UsersService;

  constructor() {
    this.todosService = new TodosService();
    this.usersService = new UsersService();
  }

  getTodos = async (req: Request, res: Response<Todo[]>) => {
    const todos = await this.todosService.getAllTodos();

    return res.send(todos);
  }

  addTodo = async (
    req: Request<unknown, Todo, TodoValues>,
    res: Response<Todo | string>
  ) => {
    const { body } = req;
    const users = await this.usersService.getAllUsers();

    if (body.userId !== null
      && !users.some((user: any) => user.id === body.userId)
    ) {
      res.statusCode = 404;
      res.send('User does not exist');
    }

    if (typeof body.title !== 'string') {
      res.statusCode = 400;
      res.send('Title is not correct');
    }

    if (typeof body.completed !== 'boolean') {
      res.statusCode = 400;
      res.send('Completed is not correct');
    }

    const newTodo = await this.todosService.addTodo(body);

    res.statusCode = 201;
    return res.send(newTodo);
  }
}


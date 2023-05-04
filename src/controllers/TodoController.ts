import { Request, Response } from 'express';
import { TodosService } from '../services/todoService';
import { Todo } from '../typedefs';
import { UsersService } from '../services/userService';

export class TodoController {
  protected readonly todosService: TodosService;
  private readonly usersService: UsersService;

  constructor() {
    this.todosService = new TodosService();
    this.usersService = new UsersService();
  }

  getTodos = (req: Request, res: Response<Todo[]>) => {
    const todos = this.todosService.getAllTodos();

    return res.send(todos);
  }

  addTodo = (
    req: Request<unknown, Todo, Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>,
    res: Response<Todo | string>
  ) => {
    const { body } = req;
    const users = this.usersService.getAllUsers();

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

    const newTodo = this.todosService.addTodo(body);

    res.statusCode = 201;
    return res.send(newTodo);
  }
}


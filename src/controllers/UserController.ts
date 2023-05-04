import { Request, Response } from 'express';
import { UsersService } from "../services/userService";
import { User } from '../typedefs';


export class UserController {
  userService: UsersService;

  constructor() {
    this.userService = new UsersService();
  }

  getUsers = (req: Request, res: Response<User[]>) => {
    const users = this.userService.getAllUsers();

    return res.send(users);
  }

  addUser = (
    req: Request<unknown, User, Omit<User, 'id'>>,
    res: Response<User | string>
  ) => {
    const { body } = req;

    const { name, email } = req.body;

    if (!name) {
      res.statusCode = 400;
      return res.send('Name is not valid');
    }

    if (!email) {
      res.statusCode = 400;
      return res.send('Email is not valid');
    }

    const user = this.userService.addUser(body);

    res.statusCode = 201;
    return res.send(user);
  }
}

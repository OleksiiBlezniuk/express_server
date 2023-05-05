import { User } from '../models/User';
import { UserValues } from '../typedefs';

export class UsersService {
  getAllUsers = async () => {
    const users = await User.findAll();

    return users;
  }

  addUser = async (userValues: UserValues) => {
    const { name, email } = userValues;

    const createdUser = await User.create({
      name,
      email,
    })
    
    return createdUser;
  }
}

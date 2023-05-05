import { initDb } from './initDb';
import { Todo } from './models/Todo';
import { User } from './models/User';

const syncDb = async () => {
  console.log('START');
  
  initDb();

  await User.sync({ alter: true });
  await Todo.sync({ alter: true });

  console.log('Tables succesfully synchonized');
}

syncDb();

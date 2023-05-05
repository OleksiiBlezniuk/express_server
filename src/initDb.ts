import { Sequelize } from 'sequelize-typescript';
import { Todo } from './models/Todo';
import { User } from './models/User';

const URI = '' // your URI, register on neon.tech to get one

export const initDb = async () => {
  const sequelize = new Sequelize(
    URI,
    {
      models: [
        Todo,
        User,
      ],
      dialectOptions: {
        ssl: true,
      }
    }
  )

  try {
    await sequelize.authenticate();

    console.log('Connected to DB');
  } catch (error) {
    console.log('FAILED');
  }

  return sequelize;
}


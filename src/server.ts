import express from 'express';
import { router as todosRouter } from './routes/todosRouter';
import { router as usersRouter } from './routes/usersRouter';
import { initDb } from './initDb';

const app = express();
const sequelize = initDb();

const PORT = 4000;
const TODOS_ENPOINT = '/todos';
const USERS_ENDPOINT = '/users';

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use(TODOS_ENPOINT, express.json(), todosRouter);
app.use(USERS_ENDPOINT, express.json(), usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running of port - ${PORT}`);
});


import { Todo } from "../typedefs";

let todos: Todo[] = [
  {
    id: 1,
    createdAt: '2023-04-18T18:46:53.301Z',
    updatedAt: '2023-04-18T18:46:53.301Z',
    userId: 7,
    title: 'qweqwe',
    completed: false
  },
  {
    id: 4,
    createdAt: '2023-04-28T13:28:39.500Z',
    updatedAt: '2023-04-28T13:28:39.500Z',
    userId: 5952,
    title: '123',
    completed: false
  },
  {
    id: 6,
    createdAt: '2023-02-07T14:32:25.369Z',
    updatedAt: '2023-02-07T14:32:31.893Z',
    userId: 4398,
    title: 'f',
    completed: true
  },
  {
    id: 7,
    createdAt: '2023-01-26T07:33:06.470Z',
    updatedAt: '2023-01-30T21:08:57.257Z',
    userId: 4881,
    title: 'John',
    completed: true
  },
  {
    id: 9,
    createdAt: '2023-02-21T13:26:38.241Z',
    updatedAt: '2023-02-21T13:26:38.241Z',
    userId: 6421,
    title: ' m',
    completed: false
  },
  {
    id: 10,
    createdAt: '2023-03-01T18:52:26.229Z',
    updatedAt: '2023-03-01T18:52:26.229Z',
    userId: 6475,
    title: 'title',
    completed: false
  },
  {
    id: 13,
    createdAt: '2023-04-28T13:29:04.951Z',
    updatedAt: '2023-04-28T13:29:04.951Z',
    userId: 5952,
    title: '123',
    completed: false
  },
  {
    id: 15,
    createdAt: '2023-01-26T07:33:18.231Z',
    updatedAt: '2023-01-26T07:33:18.231Z',
    userId: 4881,
    title: 'sadf',
    completed: false
  },
  {
    id: 30,
    createdAt: '2023-01-03T20:04:07.440Z',
    updatedAt: '2023-02-24T22:36:55.230Z',
    userId: 2,
    title: 'nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis',
    completed: false
  },
  {
    id: 42,
    createdAt: '2023-01-24T18:55:31.210Z',
    updatedAt: '2023-01-24T18:55:31.210Z',
    userId: 9,
    title: 'sdfsda',
    completed: false
  },
  {
    id: 74,
    createdAt: '2023-04-05T00:02:07.356Z',
    updatedAt: '2023-04-18T11:50:20.267Z',
    userId: 15,
    title: 'Hello 1681818620196',
    completed: false
  },
  {
    id: 75,
    createdAt: '2020-07-06T14:30:32.542Z',
    updatedAt: '2023-03-27T09:50:49.547Z',
    userId: 100,
    title: 'Create the request',
    completed: true
  },
  {
    id: 81,
    createdAt: '2023-01-03T20:04:07.901Z',
    updatedAt: '2023-04-05T20:18:12.642Z',
    userId: 5,
    title: 'suscipit qui totam',
    completed: false
  },
  {
    id: 83,
    createdAt: '2023-01-03T20:04:07.518Z',
    updatedAt: '2023-04-05T20:18:09.257Z',
    userId: 5,
    title: 'quidem at rerum quis ex aut sit quam',
    completed: false
  },
  {
    id: 98,
    createdAt: '2023-01-03T20:04:07.906Z',
    updatedAt: '2023-04-05T20:18:10.818Z',
    userId: 5,
    title: 'debitis accusantium ut quo facilis nihil quis sapiente necessitatibus',
    completed: false
  },
  {
    id: 180,
    createdAt: '2020-07-06T14:30:32.542Z',
    updatedAt: '2023-03-27T09:53:58.709Z',
    userId: 1044,
    title: 'Go to gym',
    completed: false
  },
  {
    id: 999,
    createdAt: '2023-04-01T05:41:33.103Z',
    updatedAt: '2023-04-01T05:41:33.103Z',
    userId: 7777,
    title: '35345',
    completed: false
  },
  {
    id: 1044,
    createdAt: '2020-07-06T14:30:32.542Z',
    updatedAt: '2023-03-27T09:51:48.948Z',
    userId: 4308,
    title: 'Save the World',
    completed: true
  },
  {
    id: 3112,
    createdAt: '2023-03-04T06:10:28.428Z',
    updatedAt: '2023-03-04T06:10:28.428Z',
    userId: 6478,
    title: 'Time',
    completed: false
  },
  {
    id: 3455,
    createdAt: '2023-03-10T02:35:09.746Z',
    updatedAt: '2023-03-10T02:35:09.746Z',
    userId: 6478,
    title: 'Time',
    completed: false
  },
  {
    id: 4121,
    createdAt: '2023-01-30T19:16:23.191Z',
    updatedAt: '2023-02-04T19:34:21.344Z',
    userId: 4121,
    title: '1',
    completed: true
  },
  {
    id: 4122,
    createdAt: '2023-02-04T19:00:10.519Z',
    updatedAt: '2023-02-04T19:08:54.010Z',
    userId: 4121,
    title: '2',
    completed: false
  },
  {
    userId: 180,
    title: 'New todo',
    completed: false,
    id: 4123,
    createdAt: '2023-05-02T09:04:29.218Z',
    updatedAt: '2023-05-02T09:04:29.218Z'
  }
];

export class TodosService {
  private todos: Todo[];

  constructor() {
    this.todos = todos;
  }

  getAllTodos = () => {
    return this.todos;
  }

  addTodo = (todoValues: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const max = Math.max(...todos.map((todo: Todo) => todo.id));

    const newTodo = {
      ...todoValues,
      id: max + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    todos.push(newTodo);

    return newTodo;
  }
}


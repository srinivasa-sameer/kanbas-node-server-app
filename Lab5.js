const assignment = {
  id: 1,
  title: 'NodeJS Assignment',
  description: 'Create a NodeJS server with ExpressJS',
  due: '2021-10-10',
  completed: false,
  score: 0,
};

const todos = [
  { id: 1, title: 'Task 1', completed: false, description: 'Task 1' },
  { id: 2, title: 'Task 2', completed: false, description: 'Task 2' },
  { id: 3, title: 'Task 3', completed: false, description: 'Task 3' },
  { id: 4, title: 'Task 4', completed: false, description: 'Task 4' },
];

const Lab5 = (app) => {
  app.post('/a5/todos', (req, res) => {
    const newTodo = {
      ...req.body,
      id: new Date().getTime(),
    };
    todos.push(newTodo);
    res.json(todos);
  });

  app.get('/a5/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      res.status(404).send('Todo not found');
      return;
    }
    res.json(todo);
  });

  app.post('/a5/todos/create', (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: 'New Task',
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  });

  app.delete('/a5/todos/:id/delete', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    if (index === -1) {
      res.status(404).send('Todo not found');
      return;
    }
    todos.splice(index, 1);
    res.json(todos);
  });

  app.get('/a5/todos/:id/title/:newTitle', (req, res) => {
    const { id, newTitle } = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      res.status(404).send('Todo not found');
      return;
    }
    todo.title = newTitle;
    res.json(todos);
  });

  app.get('/a5/todos/:id/completed/:completed', (req, res) => {
    const { id, newCompleted } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.completed = newCompleted;
    res.json(todo);
  });

  app.get('/a5/todos/:id/description/:description', (req, res) => {
    const { id, newDescription } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.description = newDescription;
    res.json(todo);
  });

  app.get('/a5/assignment', (req, res) => {
    res.json(assignment);
  });

  app.get('/a5/assignment/title', (req, res) => {
    res.json(assignment.title);
  });

  app.get('/a5/assignment/title/:newTitle', (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  app.get('/a5/assignment/score/:newScore', (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment);
  });

  app.get('/a5/assignment/completed/:newCompleted', (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted;
    res.json(assignment);
  });

  app.get('/a5/welcome', (req, res) => {
    res.send('Welcome to Assignment 5');
  });
  app.get('/a5/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
  });
  app.get('/a5/subtract/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) - parseInt(b);
    res.send(sum.toString());
  });

  app.get('/a5/calculator', (req, res) => {
    const { a, b, operation } = req.query;
    let result = 0;
    switch (operation) {
      case 'add':
        result = parseInt(a) + parseInt(b);
        break;
      case 'subtract':
        result = parseInt(a) - parseInt(b);
        break;
      default:
        result = 'Invalid operation';
    }
    res.send(result.toString());
  });
};
export default Lab5;

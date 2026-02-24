const connection = require('./connection');


const getById = async (id)=> {
  const query = 'SELECT title, status, description, created_at FROM tasks WHERE id = ?';
  const [task] = await connection.execute(query, [id]);
  return task;
};

const getAll = async ()=> {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title, description } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, created_at, description) VALUES (?, ?, ?, ?)';
  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC, description]);

  return {insertId: createdTask.insertId};

};

const deleteTask = async (id) => {
    
  const query = 'DELETE FROM tasks WHERE id = ?';
  const removedTask = await connection.execute(query, [id]);

  return removedTask;
};

const updateTask = async (id, task) => {
  const {title, status, description} = task;
  const query = 'UPDATE tasks SET title=?, status=?, description=? WHERE id=?';
    
  const updatedTask = await connection.execute(query, [title, status, description, id]);
  return updatedTask;
};



module.exports ={
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask
};
const tasksModel = require('../models/tasksModel');

const getAll =  async (_request, response) =>{
  const tasks = await tasksModel.getAll();

  return response.status(200).json(tasks);
};

const getById = async (request, response) => {
  const {id} = request.params;
  const task = await tasksModel.getById(id);
  return response.status(200).json(task);
};

const createTask = async (req, res)=> {
    
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const {id} = req.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (req, res)=>{
  const {id} = req.params;
  await tasksModel.updateTask(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask
};
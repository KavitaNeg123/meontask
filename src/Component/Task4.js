import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask, toggleComplete } from '../actions/index';

const Task4 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const tasks = useSelector((state) => state.ToDoList.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!title) return;
    dispatch(addTask({ id: Date.now(), title, description, priority, completed: false }));
    setTitle('');
    setDescription('');
    setPriority('low');
    console.log(tasks)
  };

  const handleEditTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setCurrentId(task.id);
    setIsEditing(true);
  };

  const handleUpdateTask = () => {
    dispatch(editTask(currentId, { title, description, priority }));
    setIsEditing(false);
    setTitle('');
    setDescription('');
    setPriority('low');
    setCurrentId(null);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todo-app">
      <h2 style={{textAlign:'center'}}>Todo List</h2>
      <div className='todo'>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={isEditing ? handleUpdateTask : handleAddTask}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <ul>
        {tasks && tasks.length ? (
            <>{
            tasks.map((task) => (
          <li className='added_list' key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <div>
              <strong>{task.title}</strong> - {task.description} [{task.priority}]
            </div>
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))
            }</>) : null}
      </ul>
    </div>
  );
};

export default Task4;


export const ADD = 'ADD';

export const EDIT = 'EDIT';

export const DELETE = 'DELETE';

export const TOGGLE = 'TOGGLE';

export const addTask = (task) => ({
  type: ADD,
  payload: task,
});

export const editTask = (id, updatedTask) => ({
  type: EDIT,
  payload: { id, updatedTask },
});

export const deleteTask = (id) => ({
  type: DELETE,
  payload: id,
});

export const toggleComplete = (id) => ({
  type: TOGGLE,
  payload: id,
});

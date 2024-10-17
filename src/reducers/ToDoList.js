import { ADD, EDIT, DELETE, TOGGLE } from '../actions/index';

const initialState = {
    tasks: [],
  };
const ToDoList = (state = initialState, action) =>{
    switch (action.type) {
        case ADD:
            console.log({tasks: [...state.tasks, action.payload] })
          return { ...state, tasks: [...state.tasks, action.payload] };
    
        case EDIT:
          return {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
            ),
          };
    
        case DELETE:
          return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
          };
    
        case TOGGLE:
          return {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === action.payload ? { ...task, completed: !task.completed } : task
            ),
          };
    
        default:
          return state;
      }
}
export default ToDoList;
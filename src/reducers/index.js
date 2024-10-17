import  ToDoList from "./ToDoList"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    ToDoList:ToDoList
})
export default rootReducer;
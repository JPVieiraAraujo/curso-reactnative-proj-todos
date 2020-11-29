import { ADD_TODO } from "../actions";
import { ADD_TODO } from '../actions';

const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            const newTodo = {
                text: action.text
            }
            //explicando a sintaxe ...a
            //var a = [1,2,3]
            //var b = [5,6,7]
            //[...a, ...b] === [1,2,3,5,6,7]
            return [...state, newTodo]
        default:
            return state;
    }
}

export default todoListReducer;
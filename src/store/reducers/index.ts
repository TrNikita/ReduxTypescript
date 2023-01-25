import {combineReducers} from 'redux'
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {postReducer} from "./postReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>

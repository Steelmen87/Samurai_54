import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {useSelector} from "react-redux";
import appReducer from "./app-reduser";

let rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    friendPage: friendsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
})

export type ActionsTypes = {

}
type PropertiesType<T> = T extends {[key:string]:infer U} ? U : never
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;
export default store;
import { createStore , combineReducers} from 'redux'
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";

let rootReducer = combineReducers({
    dialogPage:dialogsReducer,
    friendPage:friendsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
//@ts-ignore
window.store = store;
export default store;
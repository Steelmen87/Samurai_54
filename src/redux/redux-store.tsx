import { createStore , combineReducers} from 'redux'
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";

let rootReducer = combineReducers({
    dialogPage:dialogsReducer,
    friendPage:friendsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
export default store;
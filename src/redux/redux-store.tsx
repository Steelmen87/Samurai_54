import { createStore , combineReducers} from 'redux'
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
    dialogPage:dialogsReducer,
    friendPage:friendsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
})

let store = createStore(reducers);
export default store;
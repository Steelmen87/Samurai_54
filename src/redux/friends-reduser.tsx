import {ActionsTypes, FriendsDialogs} from "./state";

let initialState: FriendsDialogs = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andery"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
        {id: 7, name: "Kos"}
    ]
}

const friendsReducer = (state = initialState, action: ActionsTypes) => {
    return {...state}
}
export default friendsReducer;
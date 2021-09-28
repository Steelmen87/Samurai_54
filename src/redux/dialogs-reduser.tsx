import {
    ActionsTypes,
    AddMessageActionType,
    DialogPageType,
    MessageType,
    UpDateMessageActionType
} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andery"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
        {id: 7, name: "Kos"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is you"},
        {id: 3, message: "Yo"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],

}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 6,
                message: action.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default :
            return state
    }
}
export const addAnswerActionCreator = (newMessageText: string): AddMessageActionType =>
    ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer
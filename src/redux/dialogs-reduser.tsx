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
    newMessageText: "",
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 6,
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newTextMessage,
            }
        default :
            return state
    }
}
export const addAnswerActionCreator = (): AddMessageActionType => ({type: ADD_MESSAGE})

export const updateOnMessageChangeActionCreator = (text: string): UpDateMessageActionType =>
    ({type: UPDATE_MESSAGE_TEXT, newTextMessage: text})
export default dialogsReducer
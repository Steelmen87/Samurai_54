const ADD_MESSAGE = 'ADD-MESSAGE';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andery"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
        {id: 7, name: "Kos"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is you"},
        {id: 3, message: "Yo"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ] as Array<MessageType>,

}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: AddMessageActionType): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 6,
                message: action.newMessageText
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

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}
export const addAnswerActionCreator = (newMessageText: string): AddMessageActionType =>
    ({type: ADD_MESSAGE, newMessageText} as const)

export default dialogsReducer
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import friendsReducer from "./friends-reduser";

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: (state: RootStateType) => void
    subscribe: (s: any) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type AddPostActionType = {
    type:'ADD-POST'
}
export type UpDateNewPostActionType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
}
export type AddMessageActionType = {
    type:'ADD-MESSAGE'
}
export type UpDateMessageActionType = {
    type:'UPDATE-MESSAGE-TEXT'
    newTextMessage:string
}
export type ActionsTypes = AddPostActionType|UpDateNewPostActionType|AddMessageActionType|UpDateMessageActionType


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you?", likesCount: 5},
                {id: 2, message: "It is my First post!", likesCount: 23},
                {id: 3, message: "BlaBla", likesCount: 65},

            ],
            newPostText: 'It-Camasutra.com',
        },
        dialogPage: {
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
        },
        friendPage: {
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

    },
    _rerenderEntireTree(state: RootStateType) {
        console.log('State changed');
    },

    subscribe(callback: any) {
        this._rerenderEntireTree = callback;//observer , addEventListener
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage,action)
        this._state.friendPage = friendsReducer(this._state.friendPage,action)

            this._rerenderEntireTree(this._state);
        }


}





export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string

}
export type FriendsDialogs = {
    dialogs: Array<DialogType>
}
export type RootStateType = {
    profilePage: ProfilePage
    dialogPage: DialogPageType
    friendPage: FriendsDialogs
}


export default store;

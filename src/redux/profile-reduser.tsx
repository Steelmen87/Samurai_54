import {ActionsTypes, AddPostActionType, PostsType, ProfilePage, UpDateNewPostActionType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState: ProfilePage = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 5},
        {id: 2, message: "It is my First post!", likesCount: 23},
        {id: 3, message: "BlaBla", likesCount: 65},

    ],
    newPostText: 'It-Camasutra.com',
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText:'',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText,
            }
        }
        default :
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): UpDateNewPostActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;
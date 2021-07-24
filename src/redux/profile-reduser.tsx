import {ActionsTypes, AddPostActionType, PostsType, ProfilePage, UpDateNewPostActionType} from "./state";
import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState: ProfilePage = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 5},
        {id: 2, message: "It is my First post!", likesCount: 23},
        {id: 3, message: "BlaBla", likesCount: 65},

    ],
    newPostText: 'It-Camasutra.com',
    profile: null
}

const profileReducer = (state = initialState, action: ActionsTypes | setUserProfileType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default :
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
//Нужно Типизировать
export type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: {
        aboutMe: string
        contacts: {
            facebook: string
            website: null | string
            vk: string
            twitter: string
            instagram: string
            youtube: null | string
            github: string
            mainLink: null | string
        },
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        userId: number
        photos: {
            small: string
            large: string
        }
    }
}
export const setUserProfile = (profile): setUserProfileType => ({type: SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text: string): UpDateNewPostActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export const getFollow = (userId) => {
    return (dispatch) => {
        usersAPI.getFollow(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}


export default profileReducer;
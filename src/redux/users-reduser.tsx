import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW-POST';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: { small: string, large: string },
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

export type InitialState = typeof initialState

const usersReducer = (state: InitialState = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state,
                //@ts-ignore
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state;
    }
}

type ActionType =
    followACSuccessType
    |unfollowACSuccessType
    |setUsersACType
    |setCurrentPageACType
    |setUsersTotalCountACType
    |setIsFetchingACType
    |toggleFollowingProgressType

export const followACSuccess = (userId: number) => ({type: FOLLOW, userId}as const)
type followACSuccessType = ReturnType<typeof followACSuccess>

export const unfollowACSuccess = (userId: number) => ({type: UNFOLLOW, userId}as const)
type unfollowACSuccessType = ReturnType<typeof unfollowACSuccess>

export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}as const)
type setUsersACType = ReturnType<typeof setUsersAC>

export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}as const)
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}as const)
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>

export const setIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}as const)
type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
}as const)
type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
//-----------------------------------------------------------
/*
type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
*/

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(setCurrentPageAC(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setUsersTotalCountAC(data.totalCount));
                dispatch(setCurrentPageAC(currentPage))
            })
    };
}
export const follow = (userId:number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followACSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    };
}
export const unfollow = (userId) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowACSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    };
}


export default usersReducer;
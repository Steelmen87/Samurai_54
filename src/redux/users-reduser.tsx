const FOLLOW = 'FOLLOW-POST';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: any): InitialState => {
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
            return {...state,currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state,totalUsersCount: action.count}
        }
        default :
            return state;
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})

/*type setUsersACTYPE = typeof setUsersAC
type unfollowACACTYPE = typeof unfollowAC
type followACTYPE = typeof followAC
type ACType = setUsersACTYPE|unfollowACACTYPE|followACTYPE*/


export default usersReducer;
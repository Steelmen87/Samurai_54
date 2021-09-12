import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    /* isFetching: false,*/

}

export type InitialState = typeof initialState

const authReducer = (state: InitialState = initialState, action: any): InitialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default :
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
})
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            }
        })
};

export default authReducer;
import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form';
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl:null as string | null

}

export type InitialStateType = typeof initialState

const authReducer = (state= initialState, action: setAuthUserDataType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default :
            return state;
    }
}
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
} as const)

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
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
                dispatch(stopSubmit("login", {_error: message}));
            }
        })
};
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
};

export default authReducer;
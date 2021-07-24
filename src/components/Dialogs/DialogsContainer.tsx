import React from "react";
import {addAnswerActionCreator, updateOnMessageChangeActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText:state.dialogPage.newMessageText,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            let action = updateOnMessageChangeActionCreator(body)
            dispatch(action)
        },
        onSendMessageClick: () => {
            dispatch(addAnswerActionCreator())

        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
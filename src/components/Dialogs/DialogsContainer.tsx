import React from "react";
import {addAnswerActionCreator, updateOnMessageChangeActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText:state.dialogPage.newMessageText
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

let AuthRedirectComponent =  withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
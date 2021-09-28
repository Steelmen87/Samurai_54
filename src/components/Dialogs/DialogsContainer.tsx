import React from "react";
import {addAnswerActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageText) => {
            dispatch(addAnswerActionCreator(newMessageText))

        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
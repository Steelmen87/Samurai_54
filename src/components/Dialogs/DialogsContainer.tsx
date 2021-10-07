import React, {Dispatch} from "react";
import {addAnswerActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}
export type mapStateToProps = typeof mapStateToProps
export type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>

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
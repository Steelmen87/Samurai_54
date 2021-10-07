
import {addAnswerActionCreator, DialogType} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch,} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}
//export type mapStateToProps = typeof mapStateToProps
export type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onSendMessageClick: (newMessageText:string) => {
            dispatch(addAnswerActionCreator(newMessageText))

        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
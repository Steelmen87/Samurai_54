import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {DialogType} from "../../redux/dialogs-reduser";

type PropsType = {
    dialogPage:string
    onSendMessageClick:(text:string)=>void
    dialogs:Array<DialogType>

}

const Dialogs = (props ) => {
    let state = props.dialogPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = state.messages.map(m => <Message message={m.message}/>);

    let onSendMessageClick = (values) => {
        props.onSendMessageClick(values.newMessageText);

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
            <DialogsFormRedux onSubmit={onSendMessageClick}/>
        </div>
    )
}
const length = maxLengthCreator(12)
const DialogsForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <Field
                name="newMessageText"
                component={Textarea}
                validate={[required, length]}/>
            <button>add message</button>
        </form>
    )
}
const DialogsFormRedux = reduxForm({form: "DialogMessageTextForm"})(DialogsForm);

export default Dialogs;
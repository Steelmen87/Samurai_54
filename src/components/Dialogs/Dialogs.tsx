import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm, InjectedFormProps} from 'redux-form'

const Dialogs = (props) => {
    let state = props.dialogPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = state.messages.map(m => <Message message={m.message}/>);

    let onSendMessageClick = (values) => {
        props.onSendMessageClick(values.newMessageText);

    }
    /* let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);
     }*/

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
const DialogsForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <Field name="newMessageText" component={"textarea"}/>
            {/* <textarea className={s.inputMar}
                  value={props.newMessageText}
                  onChange={onMessageChange}}*/}
            <button>add message</button>
        </form>
    )
}
const DialogsFormRedux = reduxForm({form: "DialogMessageTextForm"})(DialogsForm);

export default Dialogs;
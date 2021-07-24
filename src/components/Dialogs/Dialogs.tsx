import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = state.messages.map(m => <Message message={m.message}/>);

    let onSendMessageClick = () => {
        if (props.newMessageText === "") {
            return;
        }
        props.onSendMessageClick();

    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
            <textarea className={s.inputMar}

                      value={props.newMessageText}
                      onChange={onMessageChange}/>
            <button
                onClick={onSendMessageClick}
                className={s.b}>add
            </button>
        </div>
    )
}
export default Dialogs;
import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

type DialogItemType = {
    id:Number
    name:string
}
const DialogItem:React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src='https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg' alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
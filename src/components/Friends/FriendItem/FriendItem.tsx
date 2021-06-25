import React from "react";
import {NavLink} from "react-router-dom";
import s from './FriendItem.module.css'


const FriendItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.image}>
            <img src='https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg' alt=""/>
            <NavLink to={path} className={s.name}>{props.name}</NavLink>
        </div>
    )
}
export default FriendItem;

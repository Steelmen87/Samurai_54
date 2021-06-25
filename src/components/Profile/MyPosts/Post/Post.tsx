import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg' alt=""/>
            {props.message}
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>

    )
}
export default Post;
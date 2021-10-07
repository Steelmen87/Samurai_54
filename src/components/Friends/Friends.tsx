import React from "react";
import s from './Friends.module.css'


type FriendType = {
    fd1:number
    fd:number
}

const Friends:React.FC<FriendType> = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.parent}>
                <div className={s.child}>
                    {props.fd1}
                </div>
                <div className={s.child}>
                    {props.fd}
                </div>
            </div>
        </div>
    )
}
export default Friends;

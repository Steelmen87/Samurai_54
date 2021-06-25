import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/more-pejzazh-pesok-plyazh-volny-22777.jpg'
                     alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                My ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;
import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusFunction";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img className={s.img}
                     src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/more-pejzazh-pesok-plyazh-volny-22777.jpg'
                     alt=''/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>

                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
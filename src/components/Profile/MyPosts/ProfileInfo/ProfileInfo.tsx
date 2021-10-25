import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusFunction";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
            <div >
                <img src={props.profile.photos.large} alt=''/>

                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
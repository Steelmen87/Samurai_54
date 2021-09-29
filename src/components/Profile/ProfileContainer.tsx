import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProFile, updateStatus} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: any
    isAuth: boolean
    status: string
    authorizedUserId:string

}
type mapDispatchPropsType = {
    getUsersProFile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = mapStateToPropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<pathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUsersProFile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

export type ProfileType = {
    profile: {
        aboutMe: string
        contacts: {
            facebook: string
            website: null | string
            vk: string
            twitter: string
            instagram: string
            youtube: null | string
            github: string
            mainLink: null | string
        },
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        userId: number
        photos: {
            small: string
            large: string
        }
    },
    status: string,
    authorizedUserId:string,
    isAuth:boolean

}

let mapStateToProps = (state): ProfileType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.id,
    isAuth:state.auth.isAuth,
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProFile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

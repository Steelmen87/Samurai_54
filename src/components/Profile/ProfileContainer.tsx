import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProFile} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router";
import {Redirect} from "react-router-dom";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: any
    isAuth:boolean
}
type mapDispatchPropsType = {
    getUsersProFile: (userId: string) => void
}
type OwnPropsType = mapStateToPropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<pathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUsersProFile(userId)
        /*usersAPI.getFollow(userId)
            .then(data => {
                this.props.setUserProfile(data)
            });*/
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });*/
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
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
    isAuth:boolean
}
let mapStateToProps = (state): ProfileType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProFile})(WithUrlDataContainerComponent);
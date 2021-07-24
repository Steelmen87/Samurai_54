import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getFollow, setUserProfile} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";

type pathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: any
}
type mapDispatchPropsType = {
    setUserProfile: (profile: any) => void
    getFollow: (userId:string) => void
}
type OwnPropsType = mapStateToPropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<pathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
       this.props.getFollow(userId)
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
    }
}
let mapStateToProps = (state): ProfileType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getFollow})(WithUrlDataContainerComponent);
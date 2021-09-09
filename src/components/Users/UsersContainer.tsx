import {connect} from "react-redux";
import {
    followACSuccess,
    setCurrentPageAC,
    //setUsersAC,
    //setUsersTotalCountAC,
    unfollowACSuccess,
    //setIsFetchingAC,
    toggleFollowingProgress,
    getUsersThunkCreator,
    follow, unfollow, setUsersTotalCountAC, setUsersAC, setIsFetchingAC
} from "../../redux/users-reduser";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type UserType = {
    id: number,
    name: string,
    status: string,
    photos: { small: string, large: string },
    followed: boolean,
    onPageChanged: (pageNumber: number) => void
}

type PropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    users: Array<UserType>
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setUsers: (res: string) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    getUsers: any


}
/*export type UsersPropsType = UserType & PropsType*/

// @ts-ignore
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer)

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    toggleIsFetching: setIsFetchingAC,
    toggleFollowingProgress: toggleFollowingProgress,
    getUsers: getUsersThunkCreator
    // @ts-ignore
})(AuthRedirectComponent);

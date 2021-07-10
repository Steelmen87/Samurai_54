import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    setIsFetchingAC
} from "../../redux/users-reduser";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";

type UserType = {
    id: number,
    name: string,
    status: string,
    photos: { small: string, large: string },
    followed: boolean,
    onPageChanged:(pageNumber:number)=>void
}

type PropsType = {
    toggleIsFetching: (isFetching: boolean) => void
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



}
export type UsersPropsType = UserType & PropsType
// @ts-ignore
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
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
            />
        </>
    }


}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

/*type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount:number) => void
    toggleIsFetching: (isFetching:boolean) => void
}*/

/*let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        },

    }
}*/

export default connect(mapStateToProps, {
    follow:followAC,
    unfollow: unfollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalUsersCount:setUsersTotalCountAC,
    toggleIsFetching:setIsFetchingAC
    // @ts-ignore
    })(UsersContainer);

import React from 'react'
import styles from "./users.module.css"
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../redux/users-reduser";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    follow: (id: number) => void
    toggleFollowingProgress: (isFetching: boolean) => void
}

let Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <span>Total Users Count {props.totalUsersCount}</span>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}*</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                     alt=""/>
                     </NavLink>
            </div>
            <div>
        {u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                props.unfollow(u.id)


            }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                props.follow(u.id)


            }}>Follow</button>}
            </div>
            </span>
                <span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
            <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>

            </span>
            </span>
            </div>)
        }
    </div>
}
export default Users;
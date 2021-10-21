import React, {useMemo, useState} from 'react'
import styles from "./users.module.css"
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {setFilter, UserType} from "../../redux/users-reduser";
import {useDispatch} from "react-redux";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    follow: (id: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

let Users: React.FC<PropsType> = (props) => {
    let dispatch = useDispatch()
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [search, setSearch] = useState('')
    const [filterTimeoutID, setfilterTimeoutID] = useState('')

    const onSearchChange = (e) => {
        setSearch(e.target.value)
        dispatch(setFilter(search))
    }


    return <div>
        <input placeholder={"search"} value={search} onChange={onSearchChange}/>
        <div><strong>Total Users Count: {props.totalUsersCount}</strong></div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}*</span>
            })}
        </div>
        {
            props.users
                .filter(u=>u.name.indexOf(search)>-1)
                .map(u => <div key={u.id}>
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
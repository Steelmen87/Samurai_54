import React from 'react'
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import axios from "axios";


type UserType = {
    id: number,
    name: string,
    status: string,
    photos: { small: string, large: string },
    followed:boolean
}

type PropsType = {
    users: Array<UserType>
    setUsers: (res: string) => void
    unfollow: (id: number) => void
    follow: (id: number) => void

}

class Users extends React.Component<PropsType> {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                         alt=""/>
                </div>
                <div>
                {u.followed
                    ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
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


}


export default Users;
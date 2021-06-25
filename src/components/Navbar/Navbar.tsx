import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";

const Navbar = () => {
    return (<div>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to="/profile" className={s.a}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/dialogs" className={s.a}>Messages</NavLink></div>
                <div className={s.item}><NavLink to="/news" className={s.a}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" className={s.a}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/users" className={s.a}>Users</NavLink></div>
                <br/>
                <div className={s.item}><NavLink to="/settings" className={s.a}>Settings</NavLink></div>

                <br/>
                <div className={s.Friends}>{/*<a href="/dialogs" className={s.a}>Friends</a>*/}Friends</div>
                <br/>
                {/*<div><FriendsContainer /></div>*/}
            </nav>

        </div>
    )
}
export default Navbar;
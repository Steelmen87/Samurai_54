import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (

        <header className={s.header}>

            <img
                src='https://img.pngio.com/react-logo-png-download-900900-free-transparent-react-png-react-png-900_900.jpg'
                alt=''/>

            <div className={s.loginBlock}>

                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header;
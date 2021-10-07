import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reduser";
import {compose} from "redux";


class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        //@ts-ignore
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export type mapStateToPropsType = ReturnType<typeof mapStateToProps>

export type mapDispatchToPropType = {
    setAuthUserData:()=>void
    getAuthUserData:()=>()=>void
    logout:()=>void
}

export default compose(
    connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout}))
(HeaderContainer);
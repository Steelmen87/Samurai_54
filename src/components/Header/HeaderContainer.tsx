import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { getAuthUserData, setAuthUserData} from "../../redux/auth-reduser";
import {compose} from "redux";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
        /*usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });*/
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
export default compose(
    connect(mapStateToProps, {setAuthUserData,getAuthUserData}))
(HeaderContainer);
import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reduser";
import {getAuth} from "../../api/api";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data;
                this.props.setAuthUserData(id, email, login);
            }
        });
        /*
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id,login,email} = response.data.data;
                    this.props.setAuthUserData(id,email,login);
                }
            });*/
    }

    render() {
        //@ts-ignore
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
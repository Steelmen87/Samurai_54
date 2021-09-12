import React from "react";
import {Field, reduxForm} from 'redux-form'
import {authAPI} from "../../api/api";

const Login = (props) => {
    let onSubmit = (formData) => {
        authAPI.login(formData.login, formData.password, formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div><Field name="login" component={"input"} placeholder={"Login"}/></div>
            <div><Field name="password" component={"input"} placeholder={"Password"}/></div>
            <div><Field name="rememberMe" component={"input"} type={"checkbox"}/>remember me</div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;
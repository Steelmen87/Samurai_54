import React from "react";
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {authAPI} from "../../api/api";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

const Login = (props) => {
    let onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const length = maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div><Field name="login" component={Input} validate={[required, length]} placeholder={"Login"}/></div>
            <div><Field name="password" component={Input} validate={[required, length]} type={"password"}
                        placeholder={"Password"}/></div>
            <div><Field name="rememberMe" component={Input} type={"checkbox"}/>remember me</div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
import React from "react";
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {authAPI} from "../../api/api";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Login = () => {
    let onSubmit = (formData: FormDataType) => {
        authAPI.login(formData.login, formData.password, formData.rememberMe)
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
            <div><Field name="password" component={Input} validate={[required, length]} placeholder={"Password"}/></div>
            <div><Field name="rememberMe" component={Input} type={"checkbox"}/>remember me</div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export default Login;
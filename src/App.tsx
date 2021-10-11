import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/Login/Login";
import {InitializeApp, InitialStateType} from "./redux/app-reduser";
import {connect, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {getAuthUserData} from "./redux/auth-reduser";
import {withRouter} from "react-router";
import {compose} from "redux";


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        /*if (!this.props.initialized) {
            return <Preloader/>
        }*/
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news/" render={() => <News/>}/>
                    <Route path="/music/" render={() => <Music/>}/>
                    <Route path="/settings/" render={() => <Settings/>}/>
                    <Route path="/users/" render={() => <UsersContainer/>}/>
                    <Route path="/login/" render={() => <LoginPage/>}/>

                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: InitialStateType) => ({
    initialized: state.initialized
})

export default compose(connect(mapStateToProps, {InitializeApp}))(App);




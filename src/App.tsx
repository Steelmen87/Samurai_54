import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {InitializeApp, InitialStateType} from "./redux/app-reduser";
import {connect} from "react-redux";
import {compose} from "redux";
import 'antd/dist/antd.css'

import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu} from "antd";
import {AppHeader} from "./components/Header/Header";

class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        /*if (!this.props.initialized) {
            return <Preloader/>
        }*/
        const {SubMenu} = Menu;
        const {Header, Content, Footer, Sider} = Layout;
        return (
            <Layout>
                <AppHeader />
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1"><Link to="/profile">Profile</Link> </Menu.Item>
                                    <Menu.Item key="2"> <Link to="/dialogs">Messages</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to="/developers">Users</Link></Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/news/" render={() => <News/>}/>
                            <Route path="/music/" render={() => <Music/>}/>
                            <Route path="/settings/" render={() => <Settings/>}/>
                            <Route path="/developers/" render={() => <UsersContainer/>}/>
                            <Route path="/login/" render={() => <LoginPage/>}/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>©2021 Created by Petrov Konstantin</Footer>
            </Layout>
        )
    }
}

let mapStateToProps = (state: InitialStateType) => ({
    initialized: state.initialized
})

export default compose(connect(mapStateToProps, {InitializeApp}))(App);


/*(

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
        );*/

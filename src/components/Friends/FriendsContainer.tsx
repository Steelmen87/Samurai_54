import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import Friends from "./Friends";
import {connect} from "react-redux";
import {addAnswerActionCreator, updateOnMessageChangeActionCreator} from "../../redux/dialogs-reduser";


        /*{store => {
            let state = store.getState().friendPage.dialogs;
            let friendDialog = state.map(fd => <FriendItem name={fd.name} id={fd.id}/>);
            let fd = friendDialog.filter(d => d.props.id % 2 === 0)
            let fd1 = friendDialog.filter(d => d.props.id % 2 !== 0)
            return (
                <Friends fd={fd} fd1={fd1}/>
            )
        }*/


let mapStateToProps = (state) => {
    return {
        friendDialog:state.friendPage.dialogs.map(fd =>
            <FriendItem name={fd.name} id={fd.id}/>),
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);
export default FriendsContainer;

import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friendDialog: state.friendPage.dialogs.map(fd =>
            <FriendItem name={fd.name} id={fd.id}/>),
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;

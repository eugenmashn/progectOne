import React from 'react'

import connect from "react-redux/es/connect/connect";
import {followsAC,setUSersAC,unfollowsAC} from "../../redux/user-reducer";
import Users from "./Users";

let mapStateToProps=(state)=>{
    return{
    users:state.usersPage.users}
};
let mapDispatchToProps=(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followsAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowsAC(userId))
        },
        setUsers:(user)=>{
            dispatch(setUSersAC(user))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);
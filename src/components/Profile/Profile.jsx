import React, { Component } from 'react';
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPost";
const Profile=()=>{
    return(
        <div >
            <ProfileInfo />
            <MyPosts/>

        </div>
    )
};
export default Profile;
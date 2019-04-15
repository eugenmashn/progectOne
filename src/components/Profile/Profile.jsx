import React, { Component } from 'react';
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostContainer";

const Profile=(props)=>{
    return(
        <div >
            <ProfileInfo />
            <MyPostsContainer />

        </div>
    )
};
export default Profile;
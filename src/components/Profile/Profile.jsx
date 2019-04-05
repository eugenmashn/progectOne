import React, { Component } from 'react';
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPost";

const Profile=(props)=>{
    return(
        <div >
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts }
                     dispatch={props.dispatch}
                     />

        </div>
    )
};
export default Profile;
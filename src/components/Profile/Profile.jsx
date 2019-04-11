import React, { Component } from 'react';
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostContainer";

const Profile=(props)=>{
    return(
        <div >
            <ProfileInfo />
            <MyPostsContainer store={props.store} posts={props.profilePage.posts }
                     dispatch={props.dispatch}
                     />

        </div>
    )
};
export default Profile;
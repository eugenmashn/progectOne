import React, { Component } from 'react';
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPost";
let posts =[
    {
        id:1, message:'Hi , how are you?',countLike:5
    },
    {
        id:2, message:'It`s my first post',countLike:4
    },

];
const Profile=(props)=>{
    return(
        <div >
            <ProfileInfo />
            <MyPosts posts={posts }/>

        </div>
    )
};
export default Profile;
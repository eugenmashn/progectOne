import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost'
const Profile=()=>{
    return(
        <div className={s.content}>
            <div>
                <img src='https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'/>
            </div>

            <div>
                ava+discriphion
            </div>
            <MyPost/>
        </div>
    )
};
export default Profile;
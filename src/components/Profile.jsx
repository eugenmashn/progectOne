import React, { Component } from 'react';
import s from './Profile.module.css';
const Profile=()=>{
    return(
        <div className={s.content}>
            <div>
                <img src='https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'/>
            </div>

            <div>
                ava+discriphion
            </div>
            <div>My post
                <div>New post</div>
            </div >
            <div className={s.posts}>
                <div  className={s.item}>post1</div>
                <div className={s.item}>post2</div>
            </div>
        </div>
    )
};
export default Profile;
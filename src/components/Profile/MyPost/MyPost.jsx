import React, { Component } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
const MyPosts=()=>{
    return(

        <div>My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post />
            </div>
        </div>
    )
};
export default MyPosts;
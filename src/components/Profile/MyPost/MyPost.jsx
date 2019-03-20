import React, { Component } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
const MyPosts=()=>{
    return(

        <div>My post
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message='Hi , how are you?' countLike='5' />
                <Post  message='It`s my first post'countLike='7'/>
            </div>
        </div>
    )
};
export default MyPosts;
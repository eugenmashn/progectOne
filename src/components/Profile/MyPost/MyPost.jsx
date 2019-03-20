import React, { Component } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
const MyPosts=()=>{
    let posts =[
        {
            id:1, message:'Hi , how are you?',countLike:5
        },
        {
            id:2, message:'It`s my first post',countLike:4
        },

    ];
    let postsElements=posts.map(p=> <Post message={p.message} countLike={p.countLike} />);
    return(

        <div>My post
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;
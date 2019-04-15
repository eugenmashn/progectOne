import React, { Component } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts=(props)=>{
   let posts=props.posts;
   let newPostElement=React.createRef();
    let postsElements=posts.map(p=> <Post message={p.message}key={p.id} countLike={p.countLike} />);
   let onAddPost=()=> {
       props.addPost();

   };
   let onPostChange=()=>{
       let text=newPostElement.current.value;
     props.updateNewPostText(text);
   };
    return(

        <div>My post
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};
export default MyPosts;
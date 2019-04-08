import React, { Component } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts=(props)=>{
   let posts=props.posts;
   let newPostElement=React.createRef();
    let postsElements=posts.map(p=> <Post message={p.message} countLike={p.countLike} />);
   let addPost=()=> {
     props.dispatch(addPostActionCreator());
   };
   let onPostChange=()=>{
       let text=newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   };
    return(

        <div>My post
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};
export default MyPosts;
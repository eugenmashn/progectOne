import React, { Component } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
const MyPosts=(props)=>{
   let posts=props.posts;
   let newPostElement=React.createRef();
    let postsElements=posts.map(p=> <Post message={p.message} countLike={p.countLike} />);
   let addPost=()=> {
       let text=newPostElement.current.value;
     props.addPost(text);
     newPostElement.current.value='';
   };
    return(

        <div>My post
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};
export default MyPosts;
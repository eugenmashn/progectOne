import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostsContainer=()=>{

    return(
        <StoreContext.Consumer>{
            (store)=>{
            let addPost=()=> {
            store.dispatch(addPostActionCreator());
        };
            let onPostChange=(text)=>{

           store.dispatch(updateNewPostTextActionCreator(text));
        };
                let state=store.getState();
                return <MyPosts addPost={addPost}
                    updateNewPostText={onPostChange}

                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }}
        </StoreContext.Consumer>)

};
export default MyPostsContainer;
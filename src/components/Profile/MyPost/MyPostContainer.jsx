import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

let mapStateTOProps=(state)=>{
   return{
       posts:state.profilePage.posts,
       newPostText:state.profilePage.newPostText
   }
};
let mapDispatchTooProps=(dispatch)=>{
    return{
    updateNewPostText:(text)=>{
        let action=updateNewPostTextActionCreator(text);
        dispatch(action);
    },
    addPost:()=>{
        dispatch(addPostActionCreator());
    }

}
};
const MyPostsContainer=connect(mapStateTOProps,mapDispatchTooProps)(MyPosts);
export default MyPostsContainer;
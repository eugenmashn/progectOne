import React, { Component } from 'react';
import s from './Post.module.css';
const Post=(props)=>{
    return(

        <div  className={s.item}>
            <img src="https://scontent.fiev4-1.fna.fbcdn.net/v/t1.0-9/44215867_360069251400214_5975724780748275712_n.jpg?_nc_cat=106&_nc_ht=scontent.fiev4-1.fna&oh=27f82cfba2502af5035b7d873688c36a&oe=5D1AB270"/>
            {props.message}
            <div>
            <span>like</span> {props.countLike}
            </div>
        </div>



    )
};
export default Post;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={ posts:[
        {
            id:1, message:'Hi , how are you?',countLike:5
        },
        {
            id:2, message:'It`s my first post',countLike:4
        },


    ],
    newPostText:'Eugen Krasava',

};
 const profileReducer=(state=initialState,action)=>{
     switch (action.type) {
         case ADD_POST:{
            let newPost={
                id:5,
                message:state.newPostText,
                countLike:5
            };
            state.posts.push(newPost);
            state.newPostText='';
            return state;
        }
         case UPDATE_NEW_POST_TEXT:{
           state.newPostText=action.newText;
           return state;
        }
         default:{return state}
     };


};
export  default profileReducer;
export const addPostActionCreator=()=>{


    return {
        type: ADD_POST
    }

};
export const updateNewPostTextActionCreator=(text)=>{

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText:text,
    }
};

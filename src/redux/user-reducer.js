const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const FOLLOW='FOLLOW';
const UNFOLLOW="UNFOLLOW";
const SET_USERS="SUT_USERS"
let initialState={ users:[
        {
            id:1,photoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Eugene_of_Wurtemberg.jpg/1200px-Eugene_of_Wurtemberg.jpg",followed:true,fullName:'Eugen',status:'Creater', location:{city:'Vinnitsa',country:'Ukranian'}
        },
        {
            id:2,photoUrl:"http://www.eugenchocolate.com/slike/eugen-savojski.jpg",followed:false,fullName:'Pavel',status:'Worker', location:{city:'Kiew',country:'Ukranian'}
        },
        {
            id:3,photoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Eugene_of_Wurtemberg.jpg/1200px-Eugene_of_Wurtemberg.jpg",followed:true,fullName:'Vasiliy',status:'Worker', location:{city:'Lviv',country:'Ukranian'}
        },


    ],
    newPostText:'Eugen Krasava',

};
const userReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                   }) };
        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                }) };
        case SET_USERS:{
            return{
                ...state,users:[...state.users,...action.users] }

        }
        default:{return state}
    }


};


export const followsAC=(userId)=>({
    type:FOLLOW,
    userId
});
export const unfollowsAC=(userId)=>({
    type:UNFOLLOW,
    userId
});
export const setUSersAC=(user)=>({type:SET_USERS});

export  default userReducer;
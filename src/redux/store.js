import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store={
    _state:{
        profilePage:{ posts:[
                {
                    id:1, message:'Hi , how are you?',countLike:5
                },
                {
                    id:2, message:'It`s my first post',countLike:4
                },


            ],
            newPostText:'Eugen Krasava',

        }

        ,
        dialogsPage:{ message:[
                {
                    id:1, message:'Hi'
                },
                {
                    id:2, message:'How are your'
                },
                {
                    id:3,  message:'Ok it is very good'
                }

            ],
            dialogs:[
                {
                    id:1, name:'Eugen',srcL:'https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg'
                },
                {
                    id:2, name:'Pavel',srcL:'http://dogipedia.ru/wp-content/uploads/2016/07/%D0%9A-%D1%87%D0%B5%D0%BC%D1%83-%D1%81%D0%BD%D0%B8%D1%82%D1%81%D1%8F-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0.jpg'

                },
                {
                    id:3,  name:'Oleks',srcL:'http://img0.liveinternet.ru/images/attach/c/9/106/21/106021558_large_1.jpg'
                }

            ]
            ,
            newMessageBody:'',

        },
        sidebar:{

        }


    },
    _callSubscriber(){
        console.log('State change')
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },
    getState(){
        return this._state
    },


    addPost () {

        let newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            countLike:5
        };
       this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
     updateNewPostText(newText){
        this._state.profilePage.newPostText=newText;
        this._callSubscriber(this._state);

    },
    newMessege(newText){
        let messeg={
            id:4,
            message:newText,
        };
        this._state.dialogsPage.message.push(messeg);
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

};



export default store;
const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE="SEND_MESSAGE";
let initialState={ message:[
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
};
 const dialogReducer=(state=initialState,action)=>{

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY: {
            return{...state,
                 newMessageBody:action.body,
          }
         }

        case SEND_MESSAGE:{
            let Body=state.newMessageBody;
            return{...state,
                newMessageBody:'',
                message:[...state.message,{id:6,message:Body}]
            };

    }
        default:{return state}
        }
};

export const sendMessageCreator=()=>{


    return {
        type: SEND_MESSAGE
    }

};
export const updateNewMessageBodyCreator=(text)=>{

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body:text,
    }
};



export default dialogReducer;
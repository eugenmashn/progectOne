import React from 'react'
import styles from './users.module.css'
let Users =(props)=>{
    if(props.users.length===0){
    props.setUsers([{
            id:1,photoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Eugene_of_Wurtemberg.jpg/1200px-Eugene_of_Wurtemberg.jpg",followed:true,fullName:'Eugen',status:'Creater', location:{city:'Vinnitsa',country:'Ukranian'}
        },
        {
            id:2,photoUrl:"http://www.eugenchocolate.com/slike/eugen-savojski.jpg",followed:false,fullName:'Pavel',status:'Worker', location:{city:'Kiew',country:'Ukranian'}
        },
        {
            id:3,photoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Eugene_of_Wurtemberg.jpg/1200px-Eugene_of_Wurtemberg.jpg",followed:true,fullName:'Vasiliy',status:'Worker', location:{city:'Lviv',country:'Ukranian'}
        }]
    );}
    return<div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div> <img src={u.photoUrl} className={styles.photo}/></div>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>
                        :<button onClick={()=>{props.follow(u.id)}}>follow</button>}

                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
};
export default Users
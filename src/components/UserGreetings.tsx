import React from 'react'


interface UserGreetingsProps{
        isLoggedIn:Boolean;
        username:String;

}

function UserGreetings(props:UserGreetingsProps) {

    if(props.isLoggedIn){
        return(
            <div>
                <h2>Welcome {props.username}</h2>
            </div>
        )
    }
    
    return(
            <div>
                <h2>plz log in to continue!</h2>
            </div>
        )
    
}

export default UserGreetings

import React from "react";
import Nav from "./Nav";

export default function UserAccount({ user }){

    return (
        <div>
            <h2>{user}</h2>
            {/* <img/> ... for the user's avatar if time allows*/}
            {/* <h1>{user.username}</h1>
            <p>email: {user.email}</p>
            <p>total borrowed amouont: {user.total_borrowing}</p>
            <p>total lent amount: {user.total_lending}</p>
            <p>your total score: {user.total_score}</p> */}

            {/* log out button 
                <button
                onClick={()=>{
                    localStorage.removeItem("userValidation");
                }}>Log out</button> */}
                <Nav/>
        </div>
    )
};
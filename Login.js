import React from "react";
import "./Login.css"
import "./LoginFailed"
export default function Login(){
    return(
        <form className="FormStyle">
            <text className="TextStyle">UserName: </text>
            <input type="text" name="userName" placeholder="Enter UserName"/>
            <text>Password </text>
            <input type="password" name="UserPassword" placeholder="Enter Password"/>
            <div>
            <button>Submit</button>
            <button >cancel</button>
            </div>
        </form>
    )
}

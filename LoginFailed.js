import React from "react";
import "./Login.css"
import Login from "./Login"
export default function LoginFailed(){
    return(
        <form className="FormStyle">
            <text className="TextStyle">Login Failed </text>
            <a
          className="App-link"
          href="/Login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retry
        </a>
        </form>
    )
}

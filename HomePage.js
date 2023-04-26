import React from "react";
import "./HomePage.css"

export default function Home(){
    return(
        <>
           <h2 id="displayArea">Welcome to Reminder App </h2>
           <h3 class="name">Alice</h3>
           <h3><b>Today is 17.07.2017</b></h3>
           <h4>Choose an action</h4>
           <div className="list">
           <li>Set Reminder </li>
           <li>Modify Reminder </li>
           <li>Disable Reminder </li>
           <li>Enable Reminder </li>
           <li>Delete Reminder </li>
           <li>View Reminder </li>
           </div>
           <button>Back</button>
           
            </>
    )
}

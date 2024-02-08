import React from "react";
import jithya from "./image/jithya.jpg"

const MyProfile =()=>{};
function Week1(){
    return(
        <div className="Week1">
            <hr/>
            <h1>Displaying my profile</h1>
            <MyProfile/>
            <img src={jithya} 
            style={{height:200, width:200,borderRadius:100}}></img>
            <h2>Jithya</h2>
            <p>I am A. Jithya Niketh. I was born in Gudivada, Andhra Pradesh. I mostly grew up in Rajahmundry. I studied y 12th in Career Point Jr. College.</p>
        </div>
    )
}
export default Week1;
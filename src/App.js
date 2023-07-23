import React from "react";
import Header from "./Components/Header";
import Meme from "./Components/Meme";

/*
    Challenge:
    - create a Meme component
    - Inside the Meme Component, render a styled form
    - with our 2 inputs and the button
*/

export default function App(){
    return(
        <div>
            <Header/>
            <Meme/>
        </div>
    )
}
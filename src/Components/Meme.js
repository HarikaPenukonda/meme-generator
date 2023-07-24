import React from "react";
import memesData from "../memesData";

export default function Meme(){
    /*
        Challenge: Get a random meme from the `memes data` array
        when the "new meme image button is clicked"

        Log the url of the image to console.
        
    */
   function getMemeImage(){
    console.log("clicked")
    const memesArray = memesData.data.memes
    const randomNumber = Math.random(Math.floor() * memesArray.length)
    const url = memesArray[randomNumber].url // the url of the meme
   }
    return(
        <main>
            <form className="form">
            <input 
                type="text"
                className="form--input"
                placeholder="Top text"
                />
            <input 
                type="text"
                className="form--input" 
                placeholder="Botton text"   
                />
            <button onClick={getMemeImage} className="form--button">Get a new image</button>
        </form>
        </main>
        
    )
}
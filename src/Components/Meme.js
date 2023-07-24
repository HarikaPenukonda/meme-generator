import React from "react";
import memesData from "../memesData";

export default function Meme(){
    /*
        Challenge: Save the random meme URL in state
            - Create new state called  `memeImage` with an empty string as default
            - when the getMemeImage function is called, update the `memeImage` state to be the random chosen image URL
            - Below the div.form, add an <img/> and set the src to the new `memeImage` state you created
        
    */
    let memeImage = React.useState("")

    function getMemeImage(){
        console.log("clicked")
        const memesArray = memesData.data.memes
        const randomNumber = Math.random(Math.floor() * memesArray.length)
        const url = memesArray[randomNumber].url // the url of the meme
        memeImage = url
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
                <img src={memeImage}
                    alt="meme"
                />
                <button onClick={getMemeImage} className="form--button">Get a new image</button>
            </form>
            </main>
            
        )
}
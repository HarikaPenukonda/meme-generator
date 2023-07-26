import React from "react";
import memesData from "../memesData";

export default function Meme(){
    /*
         Challenge : 
            1. Update our state to save the meme-related 
            data as an object called `meme`. It should have the following 3 properties:
            topText, bottomText, randomImage

            2. The 2 text states can default to empty strings for now,
            and randomImage should be default to "https://i.imgflip.com/30b1gx.jpg"

            3. Next, create a new state variable called `allMemeImages`
            which will default to `memesData`

            4. Lastly, update the `getMemeImage` function and the markup to reflect our newly 
            reformed state object and array in the correct way.
    */
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    })

    const [memeImage,setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        //const url = memesArray[randomNumber].url // the url of the meme
        setMemeImage(memesArray[randomNumber].url)
    }
        return(
            <main>
                <div className="form">
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
                <img src={memeImage}
                    alt="meme"
                    className="meme--image"
                />
                
                
                {/* <p>{memeImage}</p> */}
            </div>
            </main>
            
        )
}
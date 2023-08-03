import React from "react";
import memesData from "../memesData";

export default function Meme(){
    /*
         Challenge : 
           1. setup the text inputs to save to the `topText` and
           `bottomText` state variables.
           2. Replace the hard-coded text on the image with the
           text being saved to state
    */
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    })

    const[allMemeImages, setAllMemeImages] = React.useState(memesData)

    //const [memeImage,setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url // the url of the meme
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }

    console.log(meme)
    function handleChange(event){
        setMeme(prevData => ({
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }
        return(
            <main>
                <div className="form">
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                    />
                <input 
                    type="text"
                    className="form--input" 
                    placeholder="Botton text"
                    value={meme.bottomText} 
                    onChange={handleChange}  
                    name="bottomText"
                    />
                <button onClick={getMemeImage} className="form--button">Get a new image</button>
                <img src={meme.randomImage}
                    alt="meme"
                    className="meme--image"
                />
                
                
                {/* <p>{memeImage}</p> */}
            </div>
            </main>
            
        )
}
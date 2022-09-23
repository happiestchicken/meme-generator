import '../styles.css';
import React from 'react';
import memesData from "../memesData.js"

function Main() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    return (
        <div className='main'>
            <p></p>
            <div className='text-input'>
                <input type="text" className='inputs' placeholder='Top text'></input>
                <input  type="text" className='inputs' placeholder='Bottom text'></input>
            </div>
            <div className='create-new'>
                <button onClick={getMemeImage} className='button-class'>Create a new meme image</button>
            </div>
            <div className='image-div'>
                <img src={meme.randomImage} className="image"/>
            </div>
        </div>
    )
}

export {Main}
import '../styles.css';
import React from 'react';

function Main() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // by importing from the api, we do not have to import from the .js data file
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    const [allMemeImages, setAllMemeImages] = React.useState([])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url,
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className='main'>
            <div className='text-input'>
                <input 
                type="text"
                className='inputs'
                placeholder='Top text'
                name="topText"
                value={meme.topText}
                onChange={handleChange}>
                </input>
                <input 
                type="text"
                className='inputs'
                placeholder='Bottom text'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}>
                </input>
            </div>
            <div className='create-new'>
                <button onClick={getMemeImage} className='button-class'>Create a new meme image</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className="image" alt='meme'/>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export {Main}
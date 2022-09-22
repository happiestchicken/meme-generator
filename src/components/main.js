import '../styles.css';
import React from 'react';

function Main() {
    return (
        <div className='main'>
            <div className='text-input'>
                <input type="text" className='inputs' placeholder='Top text'></input>
                <input  type="text" className='inputs' placeholder='Bottom text'></input>
            </div>
            <div className='create-new'>
                <button className='button-class'>Create a new meme image</button>
            </div>
        </div>
    )
}

export {Main}
import '../styles.css';
import React from 'react';

function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <span>MEME GENERATOR</span>
            </div>
            <div className='header-right'>
                <span>React Course - Project 3</span>
            </div>
        </div>
    )
}

export {Header}
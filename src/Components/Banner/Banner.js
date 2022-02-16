import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Money Heist</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded</h1>

            </div>
            <div className="fade_bottom"></div>
            
        </div>
    )
}

export default Banner

import React from 'react'
import './ComponentFirst.css'
import componentoneImage from './images/bg-header-sqi-1.png'

const ComponentFirst = () => {
  return (
    <>
        <div className='compontent-one'>
            <div className='inside-component-one'>
                <div className='text-area-global'>
                    <h1>Study to become a global talent</h1>
                    <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
                    <div className='Start-now-link'>
                        <a href="">Start Now</a>
                    </div>
                </div>
                <div className='image-side'>
                    <img src={componentoneImage} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ComponentFirst
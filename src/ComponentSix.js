import React from 'react'
import './ComponentSix.css'
import video from './videos/Campus Tour _ SQI College of ICT, Ibadan.mp4'
const ComponentSix = () => {
  return (
    <>
        <div className='component-six'>
            <div className='inside-component-six'>
                <div className='video'>
                    <video src={video} controls></video>
                </div>
                <div className='text-side'>
                    <h2>Take a Tour</h2>
                    <p>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
                    <div className='links'>
                        <a href="#">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ComponentSix
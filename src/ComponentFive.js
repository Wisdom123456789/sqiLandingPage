import React from 'react'
import './ComponentFive.css'
import google from './images/google.png'
import interswitch from './images/Interswitch.png'
import andela from './images/Andela-log-landscape-blue-400px.png'
import microsoft from './images/Microsoft_logo.png'
import paystack from './images/Paystack.png'
import brewery from './images/brewery.png'
import wema from './images/Wema-Bank-Logo.png'
import clan from './images/clan-logo.png'
import edozzier from './images/edozzier.png'
import moneymie from './images/moneymie.png'
import nigeria_army from './images/Nigerian_Army.png'
import aella from './images/aella-credit.png'





const ComponentFive = () => {
  return (
    <>
        <div className='component-five'>
            <div className='inside-component-five'>
                <div className='text-area-two'>
                    <h2>Our alumni work at world-class companies around the world including</h2>
                </div>
                <div className='images-div'>
                    <div className='image-row'>
                        <div className='image'>
                            <img src={google} alt="" />
                        </div>
                        <div className='image'>
                            <img src={interswitch} alt="" />
                        </div>
                        <div className='image'>
                            <img src={andela} alt="" />
                        </div>
                        <div className='image'>
                            <img src={microsoft} alt="" />
                        </div>
                    </div>
                    <div className='image-row'>
                        <div className='image'>
                            <img src={paystack} alt="" />
                        </div>
                        <div className='image'>
                            <img src={brewery} alt="" />
                        </div>
                        <div className='image'>
                            <img src={wema} alt="" />
                        </div>
                        <div className='image'>
                            <img src={clan} alt="" />
                        </div>
                    </div>
                    <div className='image-row'>
                        <div className='image'>
                            <img src={edozzier} alt="" />
                        </div>
                        <div className='image'>
                            <img src={moneymie} alt="" />
                        </div>
                        <div className='image'>
                            <img src={nigeria_army} alt="" />
                        </div>
                        <div className='image'>
                            <img src={aella} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ComponentFive
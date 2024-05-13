import React from 'react'
import './ComponentEleven.css'
import commission from './images/commisioner-for-education-400x250.jpg'
import nid from './images/NID-admission-2023-2024-400x250.jpg'
import sqijamb from './images/sqijamb1-400x250.jpg'

const ComponentEleven = () => {
  return (
    <>
        <div className='component-eleven'>
            <div className='inside-component-eleven'>
                <div className='top-component-eleven'>
                    <h2>Latest News</h2>
                    <a href="#">Read More</a>
                </div>
                <div className='bottom-component-eleven'>
                    <div className='each-container-component-eleven'>
                        <img src={commission} alt="" />
                        <div className='text-component-eleven'>
                            <h5>THE KEY NOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER PROFESSOR ABDULWAHEED ADELABU</h5>
                            <p className='smalltext'>Jan 30, 2024</p>
                            <p>THE KEYNOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER MINISTRY OF EDUCATION SCIENCE AND TECHNOLOGY, PROFESSOR ABDULWAHEED ADELABU ON THE OCCASION OF OPENING OF THE SQI AI AND ROBOTIC RESEARCH AND TRAINING AT HAIER THERMOCOOL BUILDING CHALLENGE ON 27TH JANUARY,...</p>
                        </div>
                    </div>
                    <div className='each-container-component-eleven'>
                        <img src={nid} alt="" />
                        <div className='text-component-eleven'>
                            <h5>APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!</h5>
                            <p className='smalltext'>Jan 13, 2024</p>
                            <p>APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!</p> <br />
                            <p>We are pleased to let you know that the admission process for the 2023/2024 academic session has started.Intending candidates are to choose SOFTQUEST INCORPORATED (SQI) College of ICT as their first choice in their JAMB/UTME registration to be eligible.</p>
                        </div>
                    </div>
                    <div className='each-container-component-eleven'>
                        <img src={sqijamb} alt="" />
                        <div className='text-component-eleven'>
                            <h5>SQI College of ICT Post-UTME Examination Date, and Change of Institution 2023</h5>
                            <p className='smalltext'>Jul 10, 2023</p>
                            <p>SQI College of ICT Post-UTME Examination Date, and Change of Institution We would like to inform you that the SQI Post-UTME Examination has been slated for July 29, 2023. This examination is a crucial step towards gaining admission into SQI College of ICT for the...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ComponentEleven
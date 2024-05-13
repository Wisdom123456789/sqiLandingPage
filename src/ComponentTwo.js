import React from 'react'
import './ComponentTwo.css'
import college from './images/college.jpg'
import prof from './images/prof.jpg'
import certificate from './images/certificate.jpg'

const ComponentTwo = () => {
  return (
    <>
        <div className='component-two'>
            <div className='inside-componetn-two'>
                <h2>Start here. Change the world.</h2>
                <div className='learn-more'>
                    <div className='inside-learn-more'>
                        <img src={college} alt="" />
                        <h3>National Innovative Diploma (NID)</h3>
                        <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
                        <div className='link'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className='inside-learn-more'>
                        <img src={prof} alt="" />
                        <h3>Professional Diploma <br /> Certificate</h3>
                        <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                        <div className='link'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>

                    <div className='inside-learn-more'>
                        <img src={certificate} alt="" />
                        <h3>Certificate Program</h3>
                        <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
                        <div className='link'>
                            <a href="#">Learn More</a>
                        </div>
                    </div>                </div>
            </div>
        </div>
    </>
  )
}

export default ComponentTwo
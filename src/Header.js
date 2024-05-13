import React from 'react';
import sqiLogo from './images/co.jpg';
import './Header.css'
const Header = () => {
  return (
    <>
      <div className='Heading'>
        <div className='inside-header'>
          <div className='sqi-logo'>
            <img src={sqiLogo} alt="" />
          </div>
          <div className='nav'>
            <div className='drop-down-general'>
              <a href="#about">About<span class="material-symbols-outlined">expand_more</span></a>
              <div className='drop-down'>
                <p>Our Story</p>
                <p>Our Team</p>
                <p>Campus Info</p>
              </div>
            </div>
            <div className='drop-down-general'>
              <a href="#about">Programmes<span class="material-symbols-outlined">expand_more</span></a>
              <div className='drop-down'>
                <p>National Innovation Diploma</p>
                <p>Professional Diploma Program</p>
                <p>Executive Professional Certificate Programme</p>
              </div>
            </div>
            <div className='drop-down-general'>
              <a href="#about">Admissions<span class="material-symbols-outlined">expand_more</span></a>
              <div className='drop-down'>
                <p>Apply for a Programme</p>
                <p>Mode of Study <br /></p>
                <p>Tuition <br /></p>
                <p>Frequently Asked Questions</p>
              </div>
            </div>
            <div className='drop-down-general'>
              <a href="#about">E-portal<span class="material-symbols-outlined">expand_more</span></a>
              <div className='drop-down'>
                <p>Student</p>
                <p>Stuff</p>
              </div>
            </div>
            <div className='drop-down-general'>
              <a href="#about">SQI Scholarship</a>
            </div>
            <div className='drop-down-general'>
              <a href="#about">News</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
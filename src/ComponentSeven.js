import React from 'react'
import './ComponentSeven.css'
import ict_ibadan from './images/2021-07-31.jpg'
import powered_by_google from './images/powered_by_google_on_white.png'
import Oluwaseyi from './images/unnamed.png'
import emmanuel from './images/unnamed (1).png'

const ComponentSeven = () => {
  return (
    <>
      <div className='component-seven'>
        <div className='inside-component-seven'>
          <div className='text-area-three'>
            <h2>Testimonials</h2>
            <p>Read what our current students and alumni have to say about their SQI experience.</p>
          </div>
          <div className='testimonials-container'>
            <div className='inside-testimonial-container'>
              <div className='left-side-of-test'>
                <div className='container-of-left'>
                  <div className='small-image'>
                    <img src={ict_ibadan} alt="" />
                  </div>
                  <div className='container-of-left-text'>
                    <div className='span'>
                      <span>SQI College of ICT IBADAN</span>
                    </div>
                    <div className='stars'>
                      <span>4.9</span><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-regular fa-star-half-stroke" style={{color: "#fb8e28"}}></i>
                    </div>
                    <div className='reviews'>
                      Based on 84 reviews
                    </div>
                    <div className='powered'>
                      <img src={powered_by_google} alt="" />
                    </div>
                    <div className='reviews-us'>
                      <a href="#">reviews us on </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-side-of-text'>
                  <div className='container-right-side'>
                    <div className='names'>
                      <img src={Oluwaseyi} alt="" />
                      <div className='text-names'>
                        <a href="#">Oluwaseyi Odekomaya</a>
                        <p>3 years ago</p>
                      </div>
                    </div>
                    <div className='second-stars'>
                      <i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i>
                    </div>
                    <div className='text-p'>
                      <p>I've compared other platforms to this one to be honest and they don't measure up. The platforms that give a comparable level of the quality of skills cost a lot more and don't even offer a guarantee of access to real world project and situations... The ones available at a cheaper price so to say do not give a level of quality even close to it... Some platforms charge a lot more and yet still falter in the delivery of good contents... Another aspect that I noticed in comparison is that instructors at SQI College of ICT are actually interested in ensuring their students understand what they are learning. They take joy in ensuring the students comprehend and are able to apply what is being taught and explain in the simplest ways possible to ensure maximum comprehension....I'm not sharing this because I have any affiliation with SQI College of ICT, I'm doing so because it's simply the truth. If anyone else tries to make their research, they will find out that it's true too.</p>
                    </div>
                  </div>
                  <div className='container-right-side'>
                    <div className='names'>
                      <img src={emmanuel} alt="" />
                      <div className='text-names'>
                        <a href="#">Emmanuel Toluwanimi</a>
                        <p>3 years ago</p>
                      </div>
                    </div>
                    <div className='second-stars'>
                      <i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i><i class="fa-solid fa-star" style={{color: "#fb8e28"}}></i>
                    </div>
                    <div className='text-p'>
                      <p>SQI is one of the things I’m thankful for in my life. I’ve spent six months in SQI and I can say it’s one of the best moments in my life. The staffs are accommodating and very excellent at their job. The tutors don’t just teach, they mentor students. They make coding fun and understandable for learners. I’m able to achieve a lot enrolling with them. I’ve been able to build amazing web projects under their tutelage. ENROLL WITH SQI AND YOU WILL BE PROUD YOU DID.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComponentSeven
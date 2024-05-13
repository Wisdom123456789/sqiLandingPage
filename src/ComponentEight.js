import React from 'react'
import './ComponentEight.css'
import project from './images/project.png'
import expert from './images/expert.png'
import pysical from './images/physical.png'
import free_access from './images/free_access.png'
import cert from './images/certificate.png'
import alumini from './images/alumini.png'
import job from './images/jobs.png'
import access from './images/access.png'

const ComponentEight = () => {
  return (
    <>
        <div className='component-eight'>
            <div className='inside-component-eight'>
                <div className='left-side-component-eight'>
                    <div className='top-component-eight'>
                        <h2>Why study at SQI?</h2>
                    </div>
                    <div className='bottom-component-eight'>
                        <div className='row-component-eight'>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={project} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Project Based Learning</h3>
                                    <p>Our courses are practical, hands-on learning. Practice and apply knowledge with real world projects that contribute largely to your portfolio.</p>
                                </div>
                            </div>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={expert} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Expert Instructors</h3>
                                    <p>Get to interact with different mentors and draw from their loads of experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row-component-eight'>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={pysical} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Physical & Virtual Class</h3>
                                    <p>You can now choose physical class experience or online classroom and learn from anywhere in the world.</p>
                                </div>
                            </div>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={free_access} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Free access to our hub and community</h3>
                                    <p>You will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row-component-eight'>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={cert} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Certification</h3>
                                    <p>Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria.</p>
                                </div>
                            </div>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={alumini} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Alumni Support</h3>
                                    <p>Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row-component-eight'>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={job} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Job Opportunity</h3>
                                    <p>78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles</p>
                                </div>
                            </div>
                            <div className='each-container-component-eight'>
                                <div className='icon-section'>
                                    <img src={access} alt="" />
                                </div>
                                <div className='text-component-eight'>
                                    <h3>Access to study materials</h3>
                                    <p>Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side-component-eight'>
                </div>
            </div>
        </div>
    </>
  )
}

export default ComponentEight
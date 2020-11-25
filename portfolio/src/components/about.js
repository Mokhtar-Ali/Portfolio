import React from 'react'
import '../style/about.css'
import NavBar from './navbar'
import Me from '../style/me.JPG'
import Flatiron from '../style/flatiron.png'
import Academy from '../style/modern-Academy.jpeg'


export default function About() {
    return (
        <div className='about-me'>
            <div className=''> 
                <NavBar />
            </div>
            <div className='headlights'>
                <div className='divider'></div>
                <div className='profile-img'>
                    <img src={Me} className='profile_image' />
                </div>
                <div className='divider'></div>
            </div>
            <div className='first'>
                {/* <div className='profile-img'>
                    <img src={Me} className='profile_image' />
                </div> */}

                <div className='info-container'>
                    <p className='my-info' >
                        <br/> <br/>
                    A global citizen, multilingual in coding and linguistics. With an extensive inquisitive nature to solve problems by building a more holistic customer-centric approach. As an Egyptian American, an eye for design comes naturally in addition to having a certificate in Graphic Design from Microsoft. Having graduated from the rigorous intensive Flatiron Bootcamp in Software Engineering, I've learned Ruby, Rails, Javascript, and React in 15-weeks. Collaborated with individuals who have various educational and software backgrounds to build a high-quality application and project.
                    </p>
                </div>
            </div>

            <h1 className='about-me-header' style={{ 'marginTop': '70px' }}>Education</h1>
            <ul className='education-new'>
                <li> Flatiron School | Full Stack Software Engineering April-2020 </li>
                <li> Modern Academy Business School | Bachelor in Business Administration & Accounting 2010 GPA:3.4</li>
            </ul>
            {/* <div className='education'>
                <div className='second'>
                    <div className='flatiron-img'>
                        <img src={Flatiron} className='flatiron_image' />
                    </div>
                    <div className='flatiron-container'>
                        <h3 className='my-info-1' >Flatiron School - NYC</h3>
                        <h4 className='my-info-2' >Software Engingeering January 2020 - April 2020 - NYC</h4>
                    </div>
                </div> 

                <div className='second'>
                    <div className='flatiron-img'>
                        <img src={Academy} className='flatiron_image' />
                    </div>
                    <div className='flatiron-container'>
                        <h3 className='my-info-1' >Modern Academy - Egypt</h3>
                        <h4 className='my-info-2' >Bachelor in Business Administration and Management June 2010 - Cairo</h4>
                    </div>
                </div>
            </div> */}


        </div>
    )
}
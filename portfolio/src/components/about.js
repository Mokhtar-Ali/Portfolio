import React from 'react'
import '../style/about.css'
import NavBar from './navbar'
import Me from '../style/me.jpg'
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
                    <ul className='my-info' >
                        <br /> <br />
                    <li>Immigrated to the USA 8 years ago, with a background in Accounting and Graphic Design. </li>
                    <li>Began my career in the Hospitality industry thanks, to my friendly positive attitude. </li>
                    <li>I escalated to the top in each business I worked in, from a waiter to a Banquet Manager, and provided the best customer service experiences at Terrace On The Park. </li>
                    <li>My passion at a young age for breaking down machines both software and hardware into pieces, and putting them back together like puzzles motivated me to gain problem-solving skills. </li>
                    <li>I’ve always had an eye for design, I achieved a Graphic Design certificate at Microsoft and worked professionally for 2 years before finishing college. </li>
                    <li>Though I was always interested in seeking a field that connects all my skills and encourages me to continue learning, this is when I chose to attend Flatiron Bootcamp for Software Engineering.</li>
                    <li>When I am not programming, I am exploring the world and blogging about it. </li>
                        <a href='https://passportshub.website/' target='_blank' className='my-info-website'>www.PassportsHub.com</a>
                    <li> My hobbies: Writing | Reading | Soccer | Biking | Cooking | Volunteering | Learning new Languages.
                    </li>
                    </ul>
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
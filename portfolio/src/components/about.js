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
                    <p className='my-info' >
                        Experienced Ruby on Rails and JavaScript based programmer with a background in Accounting and Customer Service.<br /><hr />
                        Passionate about breaking down computers both software and hardware into pieces, and putting them back together like puzzles.<br /><hr />
                        Skilled at problem solving, debugging, creative design and helping tech companies develop and improve the quality and style of their applications. <br /><hr />
                        If I am not programming, I am Traveling the world and blogging about it on <br /><br />
                        <a href='https://passportshub.website/' target='_blank' className='my-info-website'>www.PassportsHub.com</a>
                    </p>
                </div>
            </div>

            <h1 className='about-me-header' style={{ 'marginTop': '70px' }}>Education</h1>
            <div className='education'>
                <div className='second'>
                    <div className='flatiron-img'>
                        <img src={Flatiron} className='flatiron_image' />
                    </div>
                    <div className='flatiron-container'>
                        <h3 className='my-info-1' >Flatiron School - NYC</h3>
                        <h4 className='my-info-2' >Software Engingeering January 2020 - April 2020 - NYC</h4>
                    </div>
                </div> {/* second */}

                <div className='second'>
                    <div className='flatiron-img'>
                        <img src={Academy} className='flatiron_image' />
                    </div>
                    <div className='flatiron-container'>
                        <h3 className='my-info-1' >Modern Academy - Egypt</h3>
                        <h4 className='my-info-2' >Bachelor in Business Administration and Management June 2010 - Cairo</h4>
                    </div>
                </div>
            </div>


        </div>
    )
}
import React from 'react';
import NavBar from './navbar';
import '../style/contact.css'
import { FaLinkedin } from 'react-icons/fa';
import { DiGithubBadge } from 'react-icons/di';



function Contact() {
  return (
    <div >
      <div className='contact'>
        <NavBar />
        <div style={{ marginTop: '200px', marginLeft: ''}} >
          <h2 className='text' >Name:  Mokhtar Ali "Mocha"</h2>
          <h2 className='text' >Cell No: 1-917-780-9875</h2>
          <h2 className='text' >Address: Astoria, New York, 11105</h2>
          <h2 className='text' >Email: JoeMokhtarAli@gmail.com</h2>
          <a href='https://www.linkedin.com/in/mokhtar-ali-494b3765/' target="_blank" className='link'> <FaLinkedin /> </a>
          <a href='https://github.com/Joemokhtarali' target="_blank" className='link'><DiGithubBadge /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact; 

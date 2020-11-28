import React from 'react';
import '../style/navbar2.css' 
// import '../style/navbar.css' 
// import Link from 'react-router-dom'
 

export default function navbar2() { 
 
    return (
        <header className='toolbar2'> 
        <nav className='toolbar_navigation'>

            <div className='spacer'></div>

            <div className='toolbar_navigation-items'>
                <ul >
                    <li ><a className='navbar-li' href='/' > Home </a></li>
                    <li ><a className='navbar-li' href='/projects'> Projects </a></li>
                    <li ><a className='navbar-li' href='/blogs'> Blogs </a></li>
                    {/* <li ><a className='navbar-li' href='/about'> About </a></li>
                    <li ><a className='navbar-li' href='/contact'> Contact </a></li> */}
                </ul>
            </div>
            <div className='spacer'></div>
        </nav>
    </header>
    );
}


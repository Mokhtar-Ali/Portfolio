import React from 'react';
import '../style/navbar.css'
import '../style/navResume.css'

 

export default function NavR() { 

    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'>
                <h3 className='nav-developer-r' >Developer</h3>

                <div className='spacer'></div>

                <div className='toolbar_navigation-items'>
                    <ul >
                        <li ><a className='navbar-li-r' href='/' > Home </a></li>
                        <li ><a className='navbar-li-r' href='/projects'> Projects </a></li>
                        <li ><a className='navbar-li-r' href='/blogs'> Blogs </a></li>
                        <li ><a className='navbar-li-r' href='/about'> About </a></li>
                        <li ><a className='navbar-li-r' href='/contact'> Contact </a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

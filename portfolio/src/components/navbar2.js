import React from 'react';
import '../style/navbar2.css' 
// import Link from 'react-router-dom'


export default function NavBar() { 
 
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'>
                {/* <h3 className='nav-developer' >Developer</h3> */}

                <div className='spacer'></div>

                <div className='toolbar_navigation-items'>
                    <ul >
                        <li className='nav2-li'><a className='navbar-li' href='/' > Home </a></li>
                        <li className='nav2-li'><a className='navbar-li' href='/projects'> Projects </a></li>
                        <li className='nav2-li'><a className='navbar-li' href='/blogs'> Blogs </a></li>
                        {/* <li className='nav2-li'><a className='navbar-li' href='/about'> About </a></li>
                        <li className='nav2-li'><a className='navbar-li' href='/contact'> Contact </a></li> */}
                    </ul>
                </div>
                <div className='spacer'></div>
            </nav>
        </header>
    );
}


import React from 'react'
import Proj1 from './proj1'
import Proj2 from './proj2'
import Proj3 from './proj3'
import Proj4 from './proj4'
import '../style/projects.css'
import NavBar from './navbar'

export default function projects() {

    return (
        <div className='projs'>
            <NavBar />
            <h2 className='projects-header' > Projects </h2>
            <div className='projects'>
                <Proj2 />
                <Proj3 />
                <Proj1 />
                <Proj4 />
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ color: 'white', padding: '10px', margin: '20px' }}>&copy; 2020 MokhtarAli.dev</p>
                <div style={{ flex: '1' }}></div>
                <p style={{ color: 'white', padding: '10px', margin: '20px' }}>Created by: Mokhtar Ali</p>
            </div>

        </div>
    )
} 
import React from 'react'
import Proj1 from './proj1'
import Proj2 from './proj2'
import Proj3 from './proj3'
import '../style/projects.css'
import NavBar from './navbar'

export default function projects() {

    return (
        <div className='projs'>
            <NavBar />
            <h3 className='projects-header' > Projects </h3>
            <div className='projects'>
                <Proj1 />
                <Proj2 />
                <Proj3 />
            </div>

        </div>
    )
} 
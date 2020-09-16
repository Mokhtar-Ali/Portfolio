import React from 'react';
import '../style/main.css'
import {
    DiCode, DiCss3, DiFirebase, DiGithubBadge, DiHtml5, DiJavascript1, DiJsBadge, DiPython, DiReact, DiRuby
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import MyResume from './MokhtarResume.pdf'





export default function Main() {

    return (
        <div className='main'> 
            <div className='about'>
                <h1 className='developer' >Web Developer</h1>
                <h3 className='name' >I am Mokhtar Ali, a Full-Stack Software Engineer In NYC</h3>
                <div className='skills'>

                    <p className='skilled' > Skills:
                <DiRuby style={{ marginLeft: '10px' }} className='icon'/>
                        <DiPython className='icon' id='python'  />
                        {/* <DiJsBadge /> */}
                        <DiJavascript1 className='icon' id='2' />
                        <DiReact className='icon' id='3' /> 
                        <DiFirebase className='icon' id='4' />
                        <DiHtml5 className='icon' id='5' />
                        <DiCss3 className='icon' id='6' />
                        <BsFillBootstrapFill className='icon' id='7' />
                        <DiGithubBadge className='icon' id='8' />
                    </p>
                </div>
                {/* <a href={MyResume} target="_blank">Read more</a> */}
                <a className='navbar-li' href={MyResume} target="_blank"><h4 className='resume' >Download Resume</h4></a>
            </div>
        </div>
    )
}
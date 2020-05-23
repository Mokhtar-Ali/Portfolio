import React from 'react';
import '../style/main.css'
import {
    DiCode, DiCss3, DiFirebase, DiGithubBadge, DiHtml5, DiJavascript1, DiJsBadge, DiPython, DiReact, DiRuby
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import GoogleFontLoader from 'react-google-font-loader';




export default function Main() {


    return (
        <div className='main'>
            <div className='about'>
                <h1 className='developer' >Web Developer</h1>
                <h2 className='name' >I am Mokhtar Ali, a Full Stack Web Developer In NYC</h2>
                <div className='skills'>

                    <p className='skilled' > Skilled at:
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
            </div>
        </div>
    )
}
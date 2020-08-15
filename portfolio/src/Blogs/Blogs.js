import React from 'react'
import NavBar from '../components/navbar'
import Tech from './tech.png'
import Travel from './travel.png'
import '../style/blogs.css'

class Blogs extends React.Component {


    render() {
        return (
            <div className='blogs'>
                <NavBar /> 

                <div className='Blogs'>
                    <div className='tech'>
                        <h2>Tech Blogs</h2>
                        <ul>
                            <a href='https://medium.com/@joemokhtarali/recursion-in-ruby-cli-project-cd12d9e56e3e' target='_blank'><li>Recursion and CLI</li></a>
                            <a href='https://medium.com/@joemokhtarali/state-props-intro-to-react-41d878a01864' target='_blank'><li>State & Props in React</li></a>
                            <a href='https://medium.com/@joemokhtarali/portfolio-ebdcab1b0e8c' target='_blank'><li>Create a Stylish Portfolio</li></a>
                            <a href='https://medium.com/@joemokhtarali/javascript-consoles-and-debugging-skills-33cc6b22de15' target='_blank'><li>Javascript Debugging Skills</li></a>
                            <a href='https://medium.com/@joemokhtarali/python3-vs-ruby-vs-javascript-329ba2fd3b0b' target='_blank'><li>Python vs Ruby vs Javascript</li></a>
                            <a href='https://medium.com/@joemokhtarali/adding-a-new-domain-to-namecheap-fe4b8c8a78df' target='_blank'><li>Host domains using NameCheap</li></a>
                            <a href='https://medium.com/@joemokhtarali/impress-interviewers-with-recursion-c10e8286894' target='_blank'><li>Impress Interviewers with Recursion</li></a>
                            <a href='https://medium.com/@joemokhtarali/how-to-improve-your-pair-programming-skills-c03a474d2de' target='_blank'><li>How to improve your Pair Programming skills</li></a>
                            <a href='https://medium.com/@joemokhtarali/intervals-part-3-create-games-using-react-redux-88d3479c7fe7' target='_blank'><li>Create Games using React-Redux3 Set & Clear Intervals </li></a>
                            <a href='https://medium.com/@joemokhtarali/create-games-using-react-redux-e68bdd3ac298' target='_blank'><li>Create Games using React-Redux1 Reducers & Action Creators </li></a>
                            <a href='https://medium.com/@joemokhtarali/part-2-create-games-using-react-redux-class-vs-functional-component-d53afc99232a' target='_blank'><li>Create Games using React-Redux2 Class vs Functional Components</li></a>
                        </ul>
                    </div>
                    <div className='travel'>
                        <h2>Travel Blogs</h2>
                        <ul>
                            <a href='https://passportshub.website/egypt' target='_blank'><li>Egypt, Cairo</li></a>
                            <a href='https://passportshub.website/thailand' target='_blank'><li>Thailand, Phuket</li></a>
                            <a href='https://passportshub.website/ecuador' target='_blank'><li>Ecuador, Quito</li></a>
                            <a href='https://passportshub.website/ecuador' target='_blank'><li>Ecuador, Baños</li></a>
                            <a href='https://passportshub.website/colombia' target='_blank'><li>Colombia, Medelin</li></a>
                            <a href='https://passportshub.website/colombia' target='_blank'><li>Colombia, Cartagena</li></a>
                            <a href='https://passportshub.website/colombia' target='_blank'><li>Colombia, Santa Marta</li></a>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Blogs
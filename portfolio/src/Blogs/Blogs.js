import React from "react";
import Navbar2 from "../components/navbar2";
import Tech from "./tech.png";
import Travel from "./travel.png";
import "../style/blogs.css";
import Blog from "../components/Blog";

const blogs = [
  {
    id: 1,
    name: "Algorithms Are Fun!",
    bio:
      "The word Algorithm isn’t just used to for engineers to fix problems, it could be anything from a recipe of your favorite dish, to the steps of Salsa dancing in the club. It’s simply a set of instructions to perform, fix or make something nice!",
    img: "https://miro.medium.com/max/700/1*FdJpRumOnhaDxKZPsi4MEA.png",
    link:
      "https://medium.com/@joemokhtarali/nothing-is-such-a-complicated-algorithms-d7dce5980505",
  },
  {
    id: 2,
    name: "Recursion and CLI",
    bio:
      "Recursion could sound like a nightmare to understand when you first come across it, it’s the only way to not let your application crash.",
    img: "https://miro.medium.com/max/700/1*UqwZsvq2rFbywDRXzYTlrg.jpeg",
    link:
      "https://medium.com/@joemokhtarali/recursion-in-ruby-cli-project-cd12d9e56e3e",
  },
  {
    id: 3,
    name: "State & Props in React",
    bio:
      "Mod4 in Flatiron BootCamp, welcome to React, where my Mod3 project using Vanilla JS was about 600 lines of code into index.js file.Then Mod4 introduces React, where organizing happens, through Components. Sweet but there is a catch. Passing props. Which was very confusing to me at first.",
    img: "https://miro.medium.com/max/700/1*m07gVwdiMvtXxIz4CUf4pw.png",
    link:
      "https://medium.com/@joemokhtarali/state-props-intro-to-react-41d878a01864",
  },
  {
    id: 4,
    name: "Create a Stylish Portfolio",
    bio:
      "I spent sometime looking up ways to create a good stylish portfolio and I ran into some issues that I thought they would be helpful to share with everyone.",
    img: "https://miro.medium.com/max/700/1*W9kFY2D7-ow5iamH0VO6EA.png",
    link: "https://medium.com/@joemokhtarali/portfolio-ebdcab1b0e8c",
  },
  {
    id: 5,
    name: "Javascript Debugging Skills",
    bio:
      "The best skills to learn about any new language, is how to debug. If you are new to JavaScript, I will introduce you to some helpful skills to debug and understand the errors.",
    img: "https://miro.medium.com/max/700/1*qX7Rw3Lu9U5DFcjW_LO-Yg.png",
    link:
      "https://medium.com/@joemokhtarali/javascript-consoles-and-debugging-skills-33cc6b22de15",
  },
  {
    id: 6,
    name: "Python vs Ruby vs Javascript",
    bio:
      "Just finished a BootCamp like myself and thinking about learning Python? You made a great choice as Python is the third most used language in today’s programming world.",
    img:
      "https://camo.githubusercontent.com/91de473fa3f2f749a56effc3e64f1049d108251f/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    link:
      "https://medium.com/@joemokhtarali/python3-vs-ruby-vs-javascript-329ba2fd3b0b",
  },
  {
    id: 7,
    name: "Host domains using NameCheap",
    bio:
      "Buying a domain from Google could be a bit cheaper but it comes with consequences, Google doesn’t host your domain, as you can only host your domain using a third party such as NameCheap or other companies.",
    img:
      "https://mma.prnewswire.com/media/484507/namecheap_Logo.jpg?p=facebook",
    link:
      "https://medium.com/@joemokhtarali/adding-a-new-domain-to-namecheap-fe4b8c8a78df",
  },
  {
    id: 8,
    name: "Impress Interviewers with Recursion",
    bio:
      "Imagine we store in an object all the value for fibs so we don’t have to repeat the function many times, this will save so much time.    ",
    img: "https://miro.medium.com/max/700/1*DYtesdFQSuwa4mxi2XKmMg.jpeg",
    link:
      "https://medium.com/@joemokhtarali/impress-interviewers-with-recursion-c10e8286894",
  },
  {
    id: 9,
    name: "How to improve your Pair Programming skills",
    bio:
      "The most required skill to get a job after the programming skills is ‘Pair Programming skills’.",
    img: "https://miro.medium.com/max/700/1*xVW2Kl6hgBvOVYR_C07AZg.jpeg",
    link:
      "https://medium.com/@joemokhtarali/how-to-improve-your-pair-programming-skills-c03a474d2de",
  },
  {
    id: 10,
    name: "Create Games using React-Redux3 Set & Clear Intervals",
    bio:
      "At this part I wanted to make all functions I created in Action Creator to work, and as it’s a game, I created functions to check the state every few seconds to keep the game real.",
    img: "https://miro.medium.com/max/700/1*jfrDJ1gvEFjGf-rqq-XfKg.jpeg",
    link:
      "https://medium.com/@joemokhtarali/intervals-part-3-create-games-using-react-redux-88d3479c7fe7",
  },
  {
    id: 11,
    name:
      "Part 2 Create Games using: React-Redux Class vs Functional Component",
    bio:
      "This is my second blog about creating a game using React-Redux, which is fun comparing to plain React. But the big question I used to ask myself, should I use Functional component or Class component??",
    img: "https://miro.medium.com/max/700/1*Ih5I3VwvS8F3M4ljEaKj1A.jpeg",
    link:
      "https://medium.com/@joemokhtarali/part-2-create-games-using-react-redux-class-vs-functional-component-d53afc99232a",
  },
  {
    id: 12,
    name: "NodeJS Basics",
    bio:
      "I found that so many jobs require knowledge about NodeJS. While learning about NodeJS reinforced my knowledge about Backend Development, it helped me have a better understanding of how servers run.",
    img: "https://miro.medium.com/max/361/1*3vUffZ30lxgF-2ClPiMKsA.png",
    link: "https://mokhtarali.medium.com/nodejs-basics-4aa8d0ee082e",
  },
];
class Blogs extends React.Component {
  render() {
    return (
      <div className="blogs">
        <Navbar2 />
        {/* <h2 > Technical Blogs</h2> */}
        <div className="Blogs">
          <div className="Tech-blogs">
            
            {blogs.map((blog) => {
              return <Blog key={blog.id} blog={blog} />
            })}
          </div>
        </div>
        <div className="div-copyRightP">
          <p>&copy; 2020 MokhtarAli.dev</p>
          <div style={{ flex: "1" }}></div>
          <p>Created by: Mokhtar Ali</p>
        </div>
      </div>
    );
  }
}

export default Blogs;

import React from 'react'
import "./projects.css"
import frozen from "../../assets/frozen.png"
import pong from "../../assets/pong.png"
import weather from "../../assets/weather.png"
import recipe from "../../assets/recipe.png"
import { FiGithub } from "react-icons/fi"


const Qualifications = () => {
  return (
    <div className='container-project'>

      <div>
        <span className="quali-text">Some of my projects</span>
      </div>

      <div className='project'>
        <div className='project-image'>
          <a href="https://v1ctorbarbosa.github.io/Recipes/" target={"blank"}><img src={recipe} alt='' /></a>
        </div>
        <div className='project-content'>
          <p>"Recipes" is an application that displays recipes for meals from different nationalities
            and different types. Created with React using tools like React Hooks, Styled Components and Router.</p>
          <a href="https://github.com/V1ctorBarbosa/Recipes" target={"blank"}>
            <FiGithub className='github' />
          </a>
        </div>
      </div>
      <div className='project-two'>
        <div className='project-image'>
          <a href="https://v1ctorbarbosa.github.io/Weather-Search/" target={"blank"}><img src={weather} alt='' /></a>
        </div>
        <div className='project-content'>
          <p>"Weather Search" is an application to consult information about the weather
            in different parts of the world. Created with React using tools like React Hooks and Styled Components.</p>
          <a href="https://github.com/V1ctorBarbosa/Weather-Search" target={"blank"}>
            <FiGithub className='github' />
          </a>
        </div>
      </div>
      <div className='project-three'>
        <div className='project-image'>
          <a href="https://v1ctorbarbosa.github.io/Frozen-Dreams/" target={"blank"}><img src={frozen} alt='' /></a>
        </div>
        <div className='project-content'>
          <p>"Frozen Dreams" is a website created for a fictional ice cream
            shop. Created with React using tools like React Hooks and Styled Components.</p>
          <a href="https://github.com/V1ctorBarbosa/Frozen-Dreams" target={"blank"}>
            <FiGithub className='github' />
          </a>
        </div>
      </div>
      <div className='project-four'>
        <div className='project-image'>
          <a href="https://v1ctorbarbosa.github.io/Pong/" target={"blank"}><img src={pong} alt='' /></a>
        </div>
        <div className='project-content'>
          <p>"Pong" is an application made with Javascript (ES6), CSS and HTML5. You can play with the computer
          for points in a ping-pong style game.</p>
          <a href="https://github.com/V1ctorBarbosa/Pong" target={"blank"}>
            <FiGithub className='github' />
          </a>
        </div>
      </div>
      

    </div>
  );
};

export default Qualifications;
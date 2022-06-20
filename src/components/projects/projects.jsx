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
        <span className="quali-text">Projetos</span>
      </div>

      <div className='project'>
        <div className='project-image'>
          <a href="https://v1ctorbarbosa.github.io/Recipes/" target={"blank"}><img src={recipe} alt='' /></a>
        </div>
        <div className='project-content'>
          <p>"Recipes" é uma aplicação que exibe receitas de diferentes tipos e nacionalidades.
            Foi criada utlizando React e ferramentas como React Hooks, Styled-Components e React Router.
            Informações sobre os pratos são extraidas via API Spoonacular.</p>
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
          <p>"Weather Search" é uma aplicação que consulta informações sobre o clima em diversas partes do mundo.
            Criada em React, utiliza ferramentas como React Hooks. Informações sobre o clima são extraídas da API Free Weather.</p>
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
          <p>"Frozen Dreams" é um site para uma sorveteria fictícia.
            Criada em React, utiliza ferramentas React Hooks e Styled Components.</p>
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
          <p>"Pong" é uma aplicação feita em HTML, CSS e Javascript(ES6). Você pode jogar contra o computador
            por pontos em um jogo clássico de ping-pong.</p>
          <a href="https://github.com/V1ctorBarbosa/Pong" target={"blank"}>
            <FiGithub className='github' />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Qualifications;
// Assets
import frozen from "../../assets/frozen.png";
import pong from "../../assets/pong.png";
import weather from "../../assets/weather.png";
import recipe from "../../assets/recipe.png";

//Styles
import { colors } from "../../styles/colors";

//Icons
import { Utensils } from 'lucide-react';
import { CloudSun } from 'lucide-react';
import { IceCreamCone } from 'lucide-react';
import { Joystick } from 'lucide-react';

//Types
import { IProjects } from "./projects.types";

export const projectsData: IProjects[] = [
  {
    title: 'Recipes',
    image: <Utensils size={64} color={colors.main} />,
    description: `"Recipes" é uma aplicação que exibe receitas de diferentes tipos e nacionalidades. Foi criada utilizando React e ferramentas como React Hooks, Styled-Components e React Router. Informações sobre os pratos são extraídas via API Spoonacular.`,
    link: "https://v1ctorbarbosa.github.io/Recipes/",
  },
  {
    title: 'Weather Search',
    image: <CloudSun size={64} color={colors.main} />,
    description: `"Weather Search" é uma aplicação que consulta informações sobre o clima em diversas partes do mundo. Criada em React, utiliza ferramentas como React Hooks. Informações sobre o clima são extraídas da API Free Weather.`,
    link: "https://github.com/V1ctorBarbosa/Weather-Search",
  },
  {
    title: 'Frozen Dreams',
    image: <IceCreamCone size={64} color={colors.main} />,
    description: `"Frozen Dreams" é um site para uma sorveteria fictícia. Criada em React, utiliza ferramentas React Hooks e Styled Components.`,
    link: "https://github.com/V1ctorBarbosa/Frozen-Dreams",
  },
  {
    title: 'Pong',
    image: <Joystick size={64} color={colors.main} />,
    description: `"Pong" é uma aplicação feita em HTML, CSS e Javascript(ES6). Você pode jogar contra o computador por pontos em um jogo clássico de ping-pong.`,
    link: "https://github.com/V1ctorBarbosa/Pong",
  },
];

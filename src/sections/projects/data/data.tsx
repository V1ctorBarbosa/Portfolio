//Icons
import { Utensils } from "lucide-react";
import { CloudSun } from "lucide-react";
import { IceCreamCone } from "lucide-react";
import { Joystick } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";

//Types
import { IProjects } from "../projects.types";

export const projectsData = (selectedColor: string): IProjects[] => {
  return [
    {
      title: "Pagô",
      icon: <PanelsTopLeft size={64} color={selectedColor} />,
      description: `A "Pagô" é uma startup que oferece uma solução no setor de contas a pagar. O produto da Pagô automatiza múltiplos pagamentos de boleto, pix e TED de uma vez só. Eu trabalhei na construção deste produto assim como suas landing pages. As tecnologias usadas na criação desse produção foram: React, Typescript, Redux, Vite, Styled-components e Framer-motion.`,
      appLink: "https://www.eaipago.com/",
    },
    {
      title: "Recipes",
      icon: <Utensils size={64} color={selectedColor} />,
      description: `"Recipes" é uma aplicação que exibe receitas de diferentes tipos e nacionalidades. Foi criada utilizando React e ferramentas como React Hooks, Styled-Components e React Router. Informações sobre os pratos são extraídas via API Spoonacular.`,
      appLink: "https://v1ctorbarbosa.github.io/Recipes/",
      codeLink: "https://github.com/V1ctorBarbosa/Recipes",
    },
    {
      title: "Weather Search",
      icon: <CloudSun size={64} color={selectedColor} />,
      description: `"Weather Search" é uma aplicação que consulta informações sobre o clima em diversas partes do mundo. Criada em React, utiliza ferramentas como React Hooks. Informações sobre o clima são extraídas da API Free Weather.`,
      appLink: "https://v1ctorbarbosa.github.io/Weather-Search/",
      codeLink: "https://github.com/V1ctorBarbosa/Weather-Search",
    },
    {
      title: "Pong",
      icon: <Joystick size={64} color={selectedColor} />,
      description: `"Pong" é uma aplicação feita em HTML, CSS e Javascript(ES6). Você pode jogar contra o computador por pontos em um jogo clássico de ping-pong.`,
      appLink: "https://v1ctorbarbosa.github.io/Pong/",
      codeLink: "https://github.com/V1ctorBarbosa/Pong",
    },
    {
      title: "Frozen Dreams",
      icon: <IceCreamCone size={64} color={selectedColor} />,
      description: `"Frozen Dreams" é um site para uma sorveteria fictícia. Criada em React, utiliza ferramentas React Hooks e Styled Components.`,
      appLink: "https://v1ctorbarbosa.github.io/Frozen-Dreams/",
      codeLink: "https://github.com/V1ctorBarbosa/Frozen-Dreams",
    },
  ];
};

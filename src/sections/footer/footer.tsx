import "./footer.css";

//Types
import { ISocialMidiaData } from "./footer.types";
import { Mouse } from "lucide-react";

//Data
import { socialMidiaData } from "./data/data";

function Footer() {
  const handleSocialMidia = (socialMidias: ISocialMidiaData[]) =>
    socialMidias.map((socialMidia: ISocialMidiaData) => (
      <a href={socialMidia.link}>{socialMidia.icon}</a>
    ));

  return (
    <div id="footer" className="container footer-container">
      <h1>
        Obrigado por estar aqui ^^{" "}
        <a href="#home">
          <h2>
            <Mouse /> - subir -
          </h2>
        </a>
      </h1>
      <div className="social-links">{handleSocialMidia(socialMidiaData)}</div>
    </div>
  );
}
export default Footer;

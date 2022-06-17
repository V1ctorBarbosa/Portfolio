import "./button.css"
import curr from "../../assets/curriculoVictorBarbosa.pdf"

function Buttons() {
  return (
    <div className="container button-container">
      <a href={curr} download="curriculoVictorBarbosa" className="btn pri">
        Download CV.
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;

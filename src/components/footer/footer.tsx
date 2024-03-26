import "./footer.css";
import { BsMouse, BsInstagram } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Obrigado por estar aqui ^^ {" "}
        <a href="#home">
          <h2>
            <BsMouse /> - subir -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/__victorbarbosa/"
        target={"blank"}>
          <BsInstagram className="social" />
        </a>

        <a href="https://github.com/V1ctorBarbosa"
        target={"blank"}>
          <FiGithub className="social" />
        </a>

        <a href="https://www.linkedin.com/in/victorfbarbosa/"
        target={"blank"}>
          <FiLinkedin className="social" />
        </a>

        <a href="mailto:vicfer2708@gmail.com"
        target={"blank"}>
          <HiOutlineMail className="social" />
        </a>

        <a href="https://wa.me/5521964123526"
        target={"blank"}>
          <FaWhatsapp className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;

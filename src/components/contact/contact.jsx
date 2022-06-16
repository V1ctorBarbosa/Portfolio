import "./contact.css";
import { 
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
 } from "react-icons/ai";


function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/victorfbarbosa/"
          className="contact linkdin"
          target={"blank"}
        >
          <AiFillLinkedin className="icon" />
          <h2>
            LinkedIn <span>Victor Barbosa</span>
          </h2>
        </a>

        <a
          href="https://wa.me/5521964123526"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 (21) 96412-3526</span>
          </h2>
        </a>

        <a href="mailto:vicfer2708@gmail.com"
           className="contact email"
           target={"blank"}>
          <AiOutlineMail className="icon" />
          <h2>
            email <span>vicfer2708@gmail.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;

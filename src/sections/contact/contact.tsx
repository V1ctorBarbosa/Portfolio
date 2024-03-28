import "./contact.css";
import { 
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
 } from "react-icons/ai";

//Data
import { contactsData } from "./data/data";

 //Types
import { IContacsData } from "./contact.types";


function Contact() {

  const handleContacts = (contacts: IContacsData[]) => {
    contacts.map((contact: IContacsData) => {
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
    })
  }

  return (
    <div id="contact" className="container contact-container">
      <h1>Fale Comigo!</h1>
      <div className="contact-links">
      {handleContacts(contactsData)}
      </div>
    </div>
  );
}

export default Contact;

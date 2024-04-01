//Types
import { IContacsData } from "../contact.types";

//Icons
import { Linkedin, Mail } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const contactsData: IContacsData[] = [
  {
    name: "Victor Barbosa",
    icon: <Linkedin size={120}/>,
    link: "https://www.linkedin.com/in/victorfbarbosa/",
    socialName: "Linkdin",
  },
  {
    name: "vicfer2708@gmail.com",
    icon: <Mail size={120}/>,
    link: "mailto:vicfer2708@gmail.com",
    socialName: "Email",
  },
  {
    name: "(21)96412-3526",
    icon: <AiOutlineWhatsApp size={120}/>,
    link: "https://wa.me/5521964123526",
    socialName: "Whatsapp",
  },

];

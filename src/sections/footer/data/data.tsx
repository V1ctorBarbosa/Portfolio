//Types
import { ISocialMidiaData } from "../footer.types"

//Styles
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Linkedin, Mail } from 'lucide-react';

export const socialMidiaData: ISocialMidiaData[] = [
    {
        link: 'https://www.instagram.com/__victorbarbosa/',
        icon: <BsInstagram size={30}/>
    },
    {
        link: 'https://github.com/V1ctorBarbosa',
        icon: <FiGithub size={30}/>
    },
    {
        link: 'https://www.linkedin.com/in/victorfbarbosa/',
        icon: <Linkedin size={30}/>
    },
    {
        link: 'mailto:vicfer2708@gmail.com',
        icon: <Mail size={30}/>
    },
    {
        link: 'https://wa.me/5521964123526',
        icon: <FaWhatsapp size={30}/>
    }
]
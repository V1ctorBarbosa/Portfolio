import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#cards">
        <VscCode className="icon" />
      </a>
      <a href="#about">
        <FaRegFileCode className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
    </div>
  );
}

export default Navbar;

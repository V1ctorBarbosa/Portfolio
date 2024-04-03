//React
import { useContext } from "react";

import "./nav.css";

//Utils
import { handleIcons, handleNightIcon } from "./utils";

//Context
import { GlobalContext } from "../../context/context";

//Date
import { navData } from "./data/data";

function Navbar() {
  const { nightMode, setNightMode } = useContext(GlobalContext)

  const handleNightMode = () => setNightMode(!nightMode)

  return (
    <div className="navigation">
      {handleIcons(navData)}
      {handleNightIcon(nightMode, handleNightMode)}
    </div>
  );
}

export default Navbar;

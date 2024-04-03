//React
import { useContext } from "react";

//Styles
import { Container } from "./nav.styles";

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
    <Container>
      {handleIcons(navData)}
      {handleNightIcon({nightMode, handleNightMode})}
    </Container>
  );
}

export default Navbar;

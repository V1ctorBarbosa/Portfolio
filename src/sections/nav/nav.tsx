//Styles
import { Container } from "./nav.styles";

//Utils
import { handleIcons, handleNightIcon } from "./utils";

//Date
import { navData } from "./data/data";

function Navbar({theme, handleTheme}: any) {
  return (
    <Container>
      {handleIcons(navData)}
      {handleNightIcon({theme, handleTheme})}
    </Container>
  );
}

export default Navbar;

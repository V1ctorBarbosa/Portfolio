//Styles
import { Container } from "./nav.styles";

//Utils
import { handleIcons, handleNightIcon } from "./utils";

//Date
import { navData } from "./data/data";


//Types
import { INavBar } from "./nav.types";

function Navbar({ theme, handleTheme }: INavBar) {

  return (
    <Container>
      {handleIcons(navData)}
      {handleNightIcon({ theme, handleTheme })}
    </Container>
  );
}

export default Navbar;

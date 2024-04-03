//Styles
import { Container } from "./nav.styles";

//Utils
import { handleIcons, handleNightIcon } from "./utils";

//Date
import { navData } from "./data/data";

function Navbar() {
  return (
    <Container>
      {handleIcons(navData)}
      {/* {handleNightIcon({nightMode, handleNightMode})} */}
    </Container>
  );
}

export default Navbar;

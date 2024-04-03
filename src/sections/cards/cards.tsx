//Components
import Text from "../../components/Text/text";

//Utils
import { handleCards } from "./utils";

//Styles
import {
  Container,
  Header,
  CardContainer
} from "./cards.styles";
import { colors } from "../../styles/colors";

//Data
import { cardsData } from "./data/data";

const Cards = () => {

  return (
    <Container>
      <Header>
        <Text
          type="h3"
          weight="thin"
          align="center"
          decoration="underline"
          color={colors.secondary}
        >
          Tecnologias
        </Text>
      </Header>
      <CardContainer>{handleCards(cardsData)}</CardContainer>
    </Container>
  );
};

export default Cards;

import "./cards.css";

//Components
import Text from "../../components/Text/text";

//Styles
import {
  Container,
  Header,
  CardContainer,
  CardSection,
  CardImg,
  CardText,
} from "./cards.styles";
import { colors } from "../../styles/colors";

//Types
import { ICardsData } from "./cards.types";

//Data
import { cardsData } from "./data/data";

const Cards = () => {
  
  const handleCards = (cardsData: ICardsData[]) =>
    cardsData.map((cardData: ICardsData) => (
      <CardSection>
        <CardImg src={cardData.image} alt={cardData.name} />
        <CardText>
          <Text type="h2">{cardData.name}</Text>
        </CardText>
      </CardSection>
    ));

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

//Styles
import { CardSection, CardImg, CardText } from "../techs.styles";

//Components
import Text from "../../../components/Text/text";
//Types
import { ICardsData } from "../techs.types";
import { MotionProps } from "framer-motion";

const hoverAnimation: MotionProps = {
  whileHover: { y: -10, transition: { duration: 0.4 } },
};

export const handleCards = (cardsData: ICardsData[]) =>
  cardsData.map((cardData: ICardsData) => (
    <CardSection key={cardData.name} {...hoverAnimation}>
      <CardImg src={cardData.image} alt={cardData.name} />
      <CardText>
        <Text type="h2" weight="thin">
          {cardData.name}
        </Text>
      </CardText>
    </CardSection>
  ));

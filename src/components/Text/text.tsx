//Types
import { IText } from "./text.types";

//Styles
import { TextContainer } from "./text.styles";

function Text({ type, color, size, align, weight, decoration, children }: IText) {
  return (
    <TextContainer type={type} color={color} size={size} align={align} weight={weight} decoration={decoration}>
      {children}
    </TextContainer>
  );
}

export default Text;

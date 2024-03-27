//Types
import { IText } from "./text.types";

//Styles
import { TextContainer } from "./text.styles";

function Text({ type, color, size, align, children }: IText) {
  return (
    <TextContainer type={type} color={color} size={size} align={align}>
      {children}
    </TextContainer>
  );
}

export default Text;

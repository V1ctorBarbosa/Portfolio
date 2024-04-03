//Styles
import { Container } from "./backgroundCircle.styles";

//Types
import { IBackgroundColors } from "./backgroundCircle.types";

function BackgroundCircle({ top, right, bottom, left, color }: IBackgroundColors) {
    return (
      <Container
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        color={color}
      ></Container>
    );
  }

export default BackgroundCircle;

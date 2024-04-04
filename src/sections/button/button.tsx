//Assets
import curr from "../../assets/curriculoVictorBarbosa.pdf";

//Styles
import {
  Container,
  Blob,
  BlobsWrapper,
  ButtonWrapper,
  InnerWrapper,
} from "./button.styles";

function Buttons() {
  const numOfBlobs = 4;
  return (
    <Container className="button-container">
      <ButtonWrapper href={curr} download="curriculoVictorBarbosa">
        Download CV.
        <InnerWrapper>
          <BlobsWrapper>
            {[...Array(numOfBlobs)].map((_, index) => (
              <Blob key={index} />
            ))}
          </BlobsWrapper>
        </InnerWrapper>
      </ButtonWrapper>
      <ButtonWrapper href="#contact">
        Fale Comigo!
        <InnerWrapper>
          <BlobsWrapper>
            {[...Array(numOfBlobs)].map((_, index) => (
              <Blob key={index} />
            ))}
          </BlobsWrapper>
        </InnerWrapper>
      </ButtonWrapper>
    </Container>
  );
}

export default Buttons;

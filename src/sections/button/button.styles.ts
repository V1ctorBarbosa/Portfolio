import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;

  height: min-content;

  @media (max-width: 390px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const numOfBlobs = 4;

export const ButtonWrapper = styled.a`
  position: relative;
  padding: 20px 46px;
  margin-bottom: 30px;

  text-align: center;
  text-transform: uppercase;

  color: ${(props) => props.theme.main};
  font-size: 14px;
  font-weight: bold;

  cursor: pointer;
  border-radius: 30px;
  overflow: hidden;

  text-align: center;

  &:hover {
    &:after {
      left: 0;
      top: 0;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    border-radius: 30px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;

    border-radius: 30px;

    transition: all 0.3s;
  }

  &:hover {
    color: ${(props) => props.theme.secondary};
    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
    }
  }
`;

export const InnerWrapper = styled.span`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background: ${(props) => props.theme.secondary};
  z-index: -1;
`;

export const BlobsWrapper = styled.span`
  position: relative;
  display: block;

  height: 100%;
`;

export const Blob = styled.span`
  position: absolute;
  top: 2px;

  width: calc(100% / ${numOfBlobs});
  height: calc(100% - 4px);

  background: ${(props) => props.theme.main};

  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 50%;

  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s;

  &:nth-child(1) {
    left: 0;
    transition-delay: 0s;
  }

  &:nth-child(2) {
    left: calc(100% / ${numOfBlobs});
    transition-delay: 0.08s;
  }

  &:nth-child(3) {
    left: calc(100% / ${numOfBlobs} * 2);
    transition-delay: 0.16s;
  }

  &:nth-child(4) {
    left: calc(100% / ${numOfBlobs} * 3);
    transition-delay: 0.24s;
  }

  ${ButtonWrapper}:hover & {
    transform: translateZ(0) scale(1.7);
  }
`;

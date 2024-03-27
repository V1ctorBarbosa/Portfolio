//Types
import { IFontStyle, IUnderlineStyle } from "./types";

export const fontWeight: IFontStyle = {
  thin: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const underLine: IUnderlineStyle = {
  textDecoration: "underline",
};

export const fonts = {
  h1: {
    fontSize: "48px",
    ...fontWeight,
    ...underLine
  },
  h2: {
    fontSize: "36px",
    ...fontWeight,
    ...underLine
  },
  h3: {
    fontSize: "28px",
    ...fontWeight,
    ...underLine
  },
  h4: {
    fontSize: "22px",
    ...fontWeight,
    ...underLine
  },
  c1: {
    fontSize: "18px",
    ...fontWeight,
    ...underLine
  },
  c2: {
    fontSize: "16px",
    ...fontWeight,
    ...underLine
  },
  p: {
    fontSize: "14px",
    ...fontWeight,
    ...underLine
  },
};

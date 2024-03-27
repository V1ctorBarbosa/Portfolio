//Styles
import { fonts, fontWeight } from "../../../styles/fonts";

//Type
import { IText } from "../text.types";

export const handleSize = (type: IText["type"]): string => {
  switch (type) {
    case "h1":
      return fonts.h1.fontSize;
    case "h2":
      return fonts.h2.fontSize;
    case "h3":
      return fonts.h3.fontSize;
    case "h4":
      return fonts.h4.fontSize;
    case "c1":
      return fonts.c1.fontSize;
    case "c2":
      return fonts.c2.fontSize;
    case "p":
      return fonts.p.fontSize;
    default:
      return "14px";
  }
};

export const handleFontWeight = (
  weight: IText["weight"]
): string | undefined => {
  switch (weight) {
    case "thin":
      return fontWeight.thin;
    case "medium":
      return fontWeight.medium;
    case "semibold":
      return fontWeight.semiBold;
    case "bold":
      return fontWeight.bold;
    default:
      return "600";
  }
};

export const handleTextAlign = (align: IText["align"]): string => {
  switch (align) {
    case "center":
      return "center";
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return "start";
  }
};

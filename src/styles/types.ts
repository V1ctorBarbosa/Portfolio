export interface IThemes {
  id?: string;
  main: string;
  primary: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  darkShade: string;
  whiteShade: string;
}

export interface IThemess {
  theme: IThemes
}

export interface IFontStyle {
  fontWeight?: string;
  fontSize?: string;
  medium?: string;
  semiBold?: string;
  bold?: string;
  thin?: string;
}

export interface IUnderlineStyle {
  textDecoration: string;
}

export interface IOnViewAnimation {
  hidden: IHidden;
  visible: IVisible;
}

interface IHidden {
  opacity: number;
  x: string;
}

interface IVisible {
  opacity: number;
  x: number;
  transition: ITransition;
}

interface ITransition {
  duration: number;
  ease: string;
}
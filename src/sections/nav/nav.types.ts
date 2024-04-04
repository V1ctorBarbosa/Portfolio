import { IThemes } from "../../styles/types";

export interface INavData {
    id: string;
    icon: JSX.Element;
}

export interface INavBar {
    theme: IThemes;
    handleTheme: () => void;
}

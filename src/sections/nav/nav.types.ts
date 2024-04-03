export interface INavData {
    id: string;
    icon: JSX.Element;
    secondaryIcon?: JSX.Element;
}

export interface INightIcon {
    nightMode: boolean;
    handleNightMode: () => void;
}
export interface IProjects {
    title: string;
    icon: JSX.Element;
    description: string;
    appLink: string,
    codeLink?: string
}

export interface IHoverIcon{
    defaultIcon: JSX.Element;
    hoverIcon: JSX.Element;
    alternativeLink?: string;
}
//Styles
import { Link, NightMode } from "../nav.styles";

//Icons
import { Sun, Moon } from "lucide-react";

//Types
import { INavData } from "../nav.types";

export const handleNightIcon = ({theme, handleTheme}: any) => {
  if (theme.id == 'dark')
    return (
      <NightMode onClick={() => handleTheme()}>
        <Sun size={30} />
      </NightMode>
    );
  else
    return (
      <NightMode onClick={() => handleTheme()}>
        <Moon size={30} />
      </NightMode>
    );
};

export const handleIcons = (Icons: INavData[]) =>
  Icons.map((icon: INavData) => (
    <Link href={icon.id} key={icon.id}>
      {icon.icon}
    </Link>
  ));

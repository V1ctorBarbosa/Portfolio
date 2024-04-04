//Styles
import { Link, NightMode } from "../nav.styles";

//Icons
import { Sun, Moon } from "lucide-react";

//Types
import { INavData } from "../nav.types";

//Context
import { useTheme } from "../../../context/context";

export const handleNightIcon = () => {

  const { theme, toggleTheme } = useTheme()

  if (theme.id == 'dark')
    return (
      <NightMode onClick={() => toggleTheme()}>
        <Sun size={30} />
      </NightMode>
    );
  else
    return (
      <NightMode onClick={() => toggleTheme()}>
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

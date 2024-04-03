//Styles
import { Link, NightMode } from "../nav.styles";

//Icons
import { Sun, Moon } from "lucide-react";

//Types
import { INavData, INightIcon } from "../nav.types";

export const handleNightIcon = ({nightMode, handleNightMode}: INightIcon) => {
  if (nightMode)
    return (
      <NightMode nightMode={nightMode} onClick={() => handleNightMode()}>
        <Sun size={30} />
      </NightMode>
    );
  else
    return (
      <NightMode nightMode={nightMode} onClick={() => handleNightMode()}>
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

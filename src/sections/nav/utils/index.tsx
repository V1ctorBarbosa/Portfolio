//Styles
import { Link, NightMode } from "../nav.styles";

//Icons
import { Sun, Moon } from "lucide-react";

//Types
import { INavData } from "../nav.types";

export const handleNightIcon = (nightMode: boolean, handleNightMode: any) => {
  if (nightMode)
    return (
      <NightMode onClick={() => handleNightMode()}>
        <Sun />
      </NightMode>
    );
  else
    return (
      <NightMode onClick={() => handleNightMode()}>
        <Moon />
      </NightMode>
    );
};

export const handleIcons = (Icons: INavData[]) =>
  Icons.map((icon: INavData) => (
    <Link href={icon.id} key={icon.id}>
      {icon.icon}
    </Link>
  ));

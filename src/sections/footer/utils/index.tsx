//Styles
import { colors } from "../../../styles/colors";
import { SocialMidiaIcon } from "../footer.styled";

//Types
import { ISocialMidiaData } from "../footer.types";
import { MotionProps } from "framer-motion";
import { IThemess } from "../../../styles/types";

//Context
import { useTheme } from "../../../context/context";

export const hoverAnimation = (theme: IThemess): MotionProps => {
  const shadow = theme.theme.id == "dark" ? colors.whiteShade : colors.darkShade;
  return {
    whileHover: {
      transition: { duration: 0.4 },
      backgroundColor: shadow,
    },
  };
};

export const handleSocialMidia = (socialMidias: ISocialMidiaData[]) => {
  const theme = useTheme();

  return socialMidias.map((socialMidia: ISocialMidiaData) => (
    <SocialMidiaIcon
      key={socialMidia.link}
      {...hoverAnimation(theme)}
      href={socialMidia.link}
      target="__blank"
    >
      {socialMidia.icon}
    </SocialMidiaIcon>
  ));
};

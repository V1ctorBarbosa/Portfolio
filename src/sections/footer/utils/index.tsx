//Styles
import { colors } from "../../../styles/colors";
import { SocialMidiaIcon } from "../footer.styled";

//Types
import { ISocialMidiaData } from "../footer.types";
import { MotionProps } from "framer-motion";

export const hoverAnimation: MotionProps = {
    whileHover: {
      transition: { duration: 0.4 },
      backgroundColor: colors.darkShade,
    },
  };

export const handleSocialMidia = (socialMidias: ISocialMidiaData[]) =>
    socialMidias.map((socialMidia: ISocialMidiaData) => (
      <SocialMidiaIcon key={socialMidia.link} {...hoverAnimation} href={socialMidia.link} target="__blank">
        {socialMidia.icon}
      </SocialMidiaIcon>
    ));
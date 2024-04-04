//React
import { useState } from "react";

//Framer motion
import { motion } from "framer-motion";

//Styles
import { HoverIconContainer } from "./hoverIcon.styles";

//Types
import { IHoverIcon } from "../../projects.types";

export const HoverIcon = ({
  defaultIcon,
  hoverIcon,
  alternativeLink,
}: IHoverIcon) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIcon = (isHovered: boolean): JSX.Element => {
    if (isHovered)
      return (
        <HoverIconContainer href={alternativeLink} target="_blank">
          {hoverIcon}
        </HoverIconContainer>
      );
    else return defaultIcon;
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      style={{ display: "inline-block" }}
    >
      {handleIcon(isHovered)}
    </motion.div>
  );
};

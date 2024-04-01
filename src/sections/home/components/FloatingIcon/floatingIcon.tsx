import { motion } from "framer-motion";
import { IconWrapper } from "./floatingIcon.styles";

function FloatingIcon({ left, top, content }: any) {
  const icons = [{ top: "-50px", left: "0" }, { top: "0", left: "50px" }, { top: "50px", left: "0" }, { top: "0", left: "-50px" }];

  return (
    <>
      {icons.map((icon, index) => (
        <IconWrapper
          key={index}
          animate={{
            top: top,
            left: left,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              delay: index * 0.5
            }
          }}
        >
          <p>{content}</p>
        </IconWrapper>
      ))}
    </>
  );
};
export default FloatingIcon;

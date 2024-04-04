//Types
import { IOnViewAnimation } from "./types";

export const onViewAnimation = (direction: string): IOnViewAnimation => {
    return {
        hidden: { opacity: 0, x: direction },
        visible: { opacity: 1, x: 0, transition: { duration: .8, ease: "easeOut" } }
    }
  };
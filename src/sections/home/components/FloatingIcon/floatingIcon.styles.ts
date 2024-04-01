import styled from "styled-components";

import { motion } from "framer-motion";

export const IconWrapper = styled(motion.div)`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;
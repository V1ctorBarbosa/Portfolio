import { motion } from "framer-motion";
import { Container } from "./floatingIcon.styles";

function FloatingIcon({ icon, position }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} // Define a escala inicial e a opacidade para fazer o ícone surgir
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [0, 360], // Define a animação de rotação de 0 a 360 graus
      }}
      transition={{
        duration: 2, // Duração total da animação
        loop: Infinity, // Define que a animação de rotação continua infinitamente
        ease: "easeInOut", // Configuração da suavização da animação
      }}
    >
      <Container icon={icon} position={position}></Container>
    </motion.div>
  );
}

export default FloatingIcon;

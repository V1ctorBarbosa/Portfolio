//Component
import Text from '../../components/Text/text';

//Styles
import { Container } from './header.styles';

function Header() {
  return (
    <Container>
      <Text type='h1' align='center'>VICTOR BARBOSA</Text>
      <Text type='c1' weight='thin' decoration='underline'>Desenvolvedor Web</Text>
    </Container>
  );
}
export default Header;

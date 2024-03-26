import './home.css';
import me from "../../assets/me5.png"
import Buttons from '../button/button';
function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={me} alt='' />
        <div className='hiden-text'>
          <p>click!</p>
        </div>
      </div>

      <h2>
        <span>Sobre mim</span> <br />
        <p>
        Sou do Rio de Janeiro, tenho 23 anos e trabalho com aplicações web utilizando React e NodeJS.
        Tenho interesse em programação, inovação, produtividade e organização.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}



export default Home;

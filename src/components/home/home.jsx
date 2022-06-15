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
      </div>

      <h2>
        <span>About Me</span> <br />
        <p>
          I'm from Rio de Janeiro, 23 years old, and work with web applications using React and NodeJS.
          I'm highly interested in programming, innovation, productivity and organization.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}



export default Home;

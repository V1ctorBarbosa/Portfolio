import ReactDOM from 'react-dom';
import './style.css';
import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));

const toggle = document.querySelector('.hover-show');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();
    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}

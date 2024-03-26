import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
const toggle = document.querySelector(".hover-show");

if (toggle) {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
}
let Icons = document.querySelectorAll(".navigation .icon");

Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeactive();
    icon.classList.add("active-nav");
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
}

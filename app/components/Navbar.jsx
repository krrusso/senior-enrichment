import React from "react";
import ReactDOM from "react-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#">Home</a>
            <a href="#">Students</a>
          </div>
        </div>
      </nav>
    );
  }

  burgerToggle() {
    const linksel = document.querySelector(".narrowLinks");
    linksel.style.display === "block"
      ? (linksel.style.display = "none")
      : (linksel.style.display = "block");
  }
}

ReactDOM.render(<Navbar />, document.querySelector("navbar"));
module.exports = Navbar;

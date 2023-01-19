import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import New from "./components/New/New";
import News from "./components/News/News";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [overlay, setOverlay] = React.useState("rgba(0,0,0,0.3)");
  const [width, setWidth] = React.useState(0);

  function updateWidth() {
    const width = window.innerWidth;
    setWidth(width);
  }

  React.useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function handleOverlay() {
    isOpen ? setOverlay("rgba(0,0,0,0.3)") : setOverlay("white");
    document.body.style.background = overlay;
  }

  return (
    <div className="App">
      <NavBar
        handleOverlay={handleOverlay}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width={width}
        className="navbar"
      />
      <Header className="header" width={width} />
      <New className="new" />
      <News className="news" />

      <div class="attribution">
        Challenge by &nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Meenakshi</a>.
      </div>
    </div>
  );
}

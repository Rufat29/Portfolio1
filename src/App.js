import React, { useState, useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useScrollDirection } from "react-use-scroll-direction";
import Main from "./components/Main/Main";

function App() {
  // const [direction, setDirection] = React.useState(Boolean);
  // const { isScrollingUp, isScrollingDown } = useScrollDirection();

  // React.useEffect(() => {
  //   isScrollingDown && setDirection(true);
  //   isScrollingUp && setDirection(false);
  // }, [isScrollingDown, isScrollingUp]);

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

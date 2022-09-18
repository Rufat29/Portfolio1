import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import { useScrollDirection } from "react-use-scroll-direction";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Main/Login/Login";

function App() {
  const [childData, setChildData] = useState("");
  // const [direction, setDirection] = React.useState(Boolean);
  // const { isScrollingUp, isScrollingDown } = useScrollDirection();

  // React.useEffect(() => {
  //   isScrollingDown && setDirection(true);
  //   isScrollingUp && setDirection(false);
  // }, [isScrollingDown, isScrollingUp]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route
            path="/login"
            element={<Login passChildData={setChildData} />}
          />

          <Route
            path="home"
            element={
              <>
                <Header />
                <Main childData={childData}></Main>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Notification from "../Notification/Notification";
import "./Main.scss";
import TopSection from "./TopSection/TopSection";
import Social from "../Social/Social";
import About from "./About/About";
import Workplace from "./Workplace/Workplace";
import Project from "./Project/Projects";
import Login from "./Login/Login";
import React, { useState } from "react";
import Contact from "./Contact/Contact";

const Main = (props) => {
  const [childData, setChildData] = useState("");
  return (
    <main>
      <div className="container">
        <TopSection />
        <About />
        <Workplace />
        <Project />
        <Contact />
        <Login passChildData={setChildData} />
        <Social />
        <Notification childData={childData} />
      </div>
    </main>
  );
};

export default Main;
import "./About.scss";
import Title from "../../Title/Title";
import Profile from "../../../assets/profile-photo.JPG";

const About = () => {
  const aboutText = "About me";
  const aboutCount = "01.";
  return (
    <section className="about">
      <Title count={aboutCount} title={aboutText}></Title>
      <div className="inner">
        <div>
          <div>
            <p>
              Hello! My name is Rufat and I enjoy creating things that live on
              the internet. My interest in web development started back in 2020
              when I decided to try editing custom landing pages — this taught
              me a lot about HTML & CSS!
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <div className="skillset">
            <ul>
              <li>HTML</li>
              <li>CSS - SCSS</li>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Bootstrap / Materialize</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="about_img">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;

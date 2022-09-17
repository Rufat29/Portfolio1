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
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
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
          <img src={Profile} />
        </div>
      </div>
    </section>
  );
};

export default About;

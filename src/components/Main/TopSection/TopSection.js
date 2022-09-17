import "./TopSection.scss";
import Profile from "../../../assets/profile.svg";

const TopSection = (props) => {
  return (
      <section className="hero">
        <div>
          <h1>Hi, my name is</h1>
          <h2>Karimli Rufat</h2>
          <h3>I build things for the web.</h3>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Kapital Bank.
          </p>
        </div>
        <div className="illustration">
          <img src={Profile} />
        </div>
      </section>
  );
};

export default TopSection;

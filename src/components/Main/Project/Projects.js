import "./Project.scss";
import Title from "../../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const aboutText = "Some Things I’ve Built";
  const aboutCount = "03.";
  const projects = [
    {
      title: "Kendigetir",
      description:
        "Mainly designed for home delivery to every pure product seeker online. Since the beginning of the activity, many villagers have already expanded their farms and are trying to meet the demands of our customers.",
      id: 1,
      link: "https://kendigetir.az/",
    },
    {
      title: "Monyo",
      description:
        "Contactless and fast service with QR menus's digitize the restaurant's menu with a QR code and become a part of the digital world.",
      id: 2,
      link: "https://monyo.az/qrcode#about",
    },
    {
      title: "Monyo Menu",
      description: "Internal menu of each restaurant provided by Monyo",
      id: 3,
      link: "https://monyo.az/?r=ozsut#general-menu",
    },
    {
      title: "Kredit Home",
      description:
        "As a Kredit Home, our main activity is providing loans with gold jewelry, telephones, tablets, computers, car collateral and car leasing.",
      id: 4,
      link: "https://www.kreditevi.az/",
    },
  ];
  return (
    <section className="projects" id="project">
      <Title count={aboutCount} title={aboutText}></Title>
      <div className="inner">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-inner">
              <div className="card-header">
                <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                <a href={project.link} target="_blank">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

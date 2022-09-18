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
        "Əsasən online olaraq hər təmiz məhsul axtaran evə çatdırılma etməyi düşünürük. Fəaliyyətə başlayandan bir çox kəndli artıq öz təsərüffatını genişləndirib və bizim müştərilərin təlabatını ödəməyə çalışır.",
      id: 1,
      link: "",
    },
    {
      title: "Monyo",
      description:
        "Contactless and fast service with QR menus's digitize the restaurant's menu with a QR code and become a part of the digital world.",
      id: 2,
      link: "",
    },
    {
      title: "Kredit evi",
      description:
        "Contactless and fast service with QR menus's digitize the restaurant's menu with a QR code and become a part of the digital world.",
      id: 3,
      link: "",
    },
    {
      title: "Kendigetir",
      description:
        "Əsasən online olaraq hər təmiz məhsul axtaran evə çatdırılma etməyi düşünürük. Fəaliyyətə başlayandan bir çox kəndli artıq öz təsərüffatını genişləndirib və bizim müştərilərin təlabatını ödəməyə çalışır.",
      id: 4,
      link: "",
    },
    {
      title: "Monyo",
      description:
        "Contactless and fast service with QR menus's digitize the restaurant's menu with a QR code and become a part of the digital world.",
      id: 5,
      link: "",
    },
    {
      title: "Kredit evi",
      description:
        "Contactless and fast service with QR menus's digitize the restaurant's menu with a QR code and become a part of the digital world.",
      id: 6,
      link: "",
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
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                ></FontAwesomeIcon>
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

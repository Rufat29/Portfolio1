import Title from "../../Title/Title";
import "./Contact.scss";

const Contact = (props) => {
  const contactTitle = "What's next?";
  const contactCount = "04.";

  return (
    <section className="contact">
      <Title count={contactCount} title={contactTitle}></Title>
      <p className="sub-title">Get In Touch</p>
      <p className="text">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a href="mailto:kerimli2002r@gmail.com" target="_blank">
        
        <button>Say Hello</button>
      </a>
    </section>
  );
};

export default Contact;

import "./Workplace.scss";
import Title from "../../Title/Title";
import React, { useState } from "react";

const Workplace = () => {
  const workplaceText = "Where I’ve Worked";
  const workplaceCount = "02.";
  const [workplaceId, setWorkPlaceId] = useState(1);

  const isDeirvlon = workplaceId === 3;
  const isCredit = workplaceId === 2;
  const isCapital = workplaceId === 1;

  const renderDeirvlon = () => (
    <div className="tab-info">
      <h3>Junior Front-end Developer @ Deirvlon Technologies</h3>
      <p>June - October 2021</p>
      <ul>
        <li>Reviews design of the website.</li>
        <li>Prepares roadmap for creating a website.</li>
        <li>Creates responsive websites according to the given design.</li>
      </ul>
    </div>
  );

  const renderCredit = () => (
    <div className="tab-info">
      <h3>Junior Front-end Developer @ Kredit evi</h3>
      <p>November - January 2021 - 2022</p>
      <ul>
        <li>Find updates that can be made on the current website.</li>
        <li>Apply updates to the site and ensure smooth operation.</li>
        <li>Adapt the site to new standarts.</li>
      </ul>
    </div>
  );

  const renderCapital = () => (
    <div className="tab-info">
      <h3>Front-end Developer @ Kapital bank</h3>
      <p>March 2022 - Present</p>
      <ul>
        <li>
          Working with product designers and managers to design user
          interactions in applications.
        </li>
        <li>Create new features for the loan project.</li>
        <li>Contribute code to the UI library of the company.</li>
      </ul>
    </div>
  );

  return (
    <section className="workplace" >
      <Title count={workplaceCount} title={workplaceText}></Title>
      <div className="inner">
        <div className="tablist">
          <button
            className={`${isCapital && "active"}`}
            onClick={() => setWorkPlaceId(1)}
          >
            Kapital Bank
          </button>
          <button
            className={`${isCredit && "active"}`}
            onClick={() => setWorkPlaceId(2)}
          >
            Kredit Evi
          </button>
          <button
            className={`${isDeirvlon && "active"}`}
            onClick={() => setWorkPlaceId(3)}
          >
            Deirvlon Technologies
          </button>
        </div>
        {workplaceId === 1 && renderCapital()}
        {workplaceId === 2 && renderCredit()}
        {workplaceId === 3 && renderDeirvlon()}
      </div>
    </section>
  );
};

export default Workplace;

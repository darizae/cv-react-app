/* eslint-disable react/prop-types */
import "../../styles/RenderedCv.css";

function Header({ info }) {
  return (
    <div className="cv-header">
      <h1>
        {info["First Name"]} {info["Last Name"]}
      </h1>
      <p>Date of Birth: {info["Date of Birth"]}</p>
      <p>Nationality: {info["Nationality"]}</p>
    </div>
  );
}

function EducationSection({ education }) {
  return (
    <div className="cv-education">
      <h2>Education</h2>
      <div>
        <h3>
          {education["Degree"]} - {education["Institution"]}
        </h3>
        <p>Major: {education["Major"]}</p>
        <p>Graduation Date: {education["Graduation Date"]}</p>
      </div>
    </div>
  );
}

function ExperienceSection({ experience }) {
  return (
    <div className="cv-experience">
      <h2>Practical Experience</h2>
      <div>
        <h3>
          {experience["Job Title"]} at {experience["Company"]}
        </h3>
        <p>
          From {experience["Start Date"]} to {experience["End Date"]}
        </p>
        <p>{experience["Job Description"]}</p>
      </div>
    </div>
  );
}

function RenderedCv({ cvData }) {
  const generalInfo = cvData.find(
    (section) => section.name === "General Information"
  ).data;
  const education = cvData.find((section) => section.name === "Education").data;
  const experience = cvData.find(
    (section) => section.name === "Practical Experience"
  ).data;

  return (
    <div className="rendered-cv-container">
      <Header info={generalInfo} />
      <EducationSection education={education} />
      <ExperienceSection experience={experience} />
    </div>
  );
}

export default RenderedCv;

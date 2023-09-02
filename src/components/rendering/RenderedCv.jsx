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

function Section({ title, data }) {
  return (
    <div className={`cv-${title.toLowerCase().replace(/ /g, "-")}`}>
      <h2>{title}</h2>
      <div>
        {Object.keys(data).map((key) => (
          <p key={key}>
            <strong>{key}:</strong> {data[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

function RenderedCv({ cvData }) {
  return (
    <div className="rendered-cv-container">
      {cvData.map((section) => (
        <Section key={section.name} title={section.name} data={section.data} />
      ))}
    </div>
  );
}

export default RenderedCv;

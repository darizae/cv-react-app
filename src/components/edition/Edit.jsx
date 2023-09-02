/* eslint-disable react/prop-types */
import EditSection from "./EditSection";
import "../../styles/Edit.css";

function Edit({ editableSections, cvData, handleInputChange }) {
  const editSections = editableSections.map((sectionInformation) => (
    <div key={sectionInformation.name} className="edit-section">
      <EditSection
        section={sectionInformation}
        sectionData={
          cvData.find((s) => s.name === sectionInformation.name)?.data || {}
        }
        handleInputChange={handleInputChange}
      />
    </div>
  ));

  return <div className="edit-sections-container">{editSections}</div>;
}

export default Edit;

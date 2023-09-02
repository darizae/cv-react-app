import EditSection from "./EditSection";
import "../../styles/Edit.css";
import { editableSections } from "./editableSections";

function Edit() {
  const editSections = editableSections.map((sectionInformation) => (
    <div key={sectionInformation.name} className="edit-section">
      <EditSection section={sectionInformation}></EditSection>
    </div>
  ));

  return <div className="edit-sections-container">{editSections}</div>;
}

export default Edit;

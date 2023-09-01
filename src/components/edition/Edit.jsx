import EditSection from "./EditSection";

import { editableSections } from "./editableSections";

function Edit() {
  console.log(editableSections);
  const editSections = editableSections.map((sectionInformation) => (
    <EditSection
      key={sectionInformation.name}
      section={sectionInformation}
    ></EditSection>
  ));

  return <>{editSections}</>;
}

export default Edit;

import Edit from "./components/edition/Edit";
import "./styles/App.css";
import { useState } from "react";
import RenderedCv from "./components/rendering/RenderedCv";
import { editableSections } from "./components/edition/editableSections";

const generateInitialState = () => {
  return editableSections.map((section) => {
    let fieldData = {};
    section.formFields.forEach((field) => {
      fieldData[field.fieldName] = field.placeholder; // using the placeholder as default value
    });
    return {
      name: section.name,
      data: fieldData,
    };
  });
};

function App() {
  const [cvData, setCvData] = useState(generateInitialState());

  function handleInputChange(sectionName, fieldName, value) {
    setCvData((prevData) => {
      const updatedData = [...prevData];
      const sectionIndex = updatedData.findIndex(
        (section) => section.name === sectionName
      );

      if (sectionIndex !== -1) {
        updatedData[sectionIndex].data[fieldName] = value;
      }

      return updatedData;
    });
  }

  return (
    <div className="app-container">
      <Edit
        editableSections={editableSections}
        cvData={cvData}
        setCvData={setCvData}
        handleInputChange={handleInputChange}
      />
      <RenderedCv cvData={cvData} />
    </div>
  );
}

export default App;

/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "../../styles/EditSectionStyles.css";

function ToolTip({ message }) {
  return <div title={message}>?</div>;
}

ToolTip.propTypes = {
  message: PropTypes.string.isRequired,
};

function TopBar({ sectionName, toolTipMessage }) {
  return (
    <div>
      <h2>{sectionName}</h2>
      <ToolTip message={toolTipMessage}></ToolTip>
    </div>
  );
}

TopBar.propTypes = {
  sectionName: PropTypes.string.isRequired,
  toolTipMessage: PropTypes.string.isRequired,
};

function ButtonContainer() {
  return (
    <div className="button-container">
      <button>Edit</button>
      <button>Submit</button>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function EditForm({ fields, sectionData, handleInputChange }) {
  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.fieldName.replace(" ", "").toLowerCase()}>
            {field.fieldName}
          </label>
          <input
            type={field.valueType === "date" ? "date" : "text"}
            id={field.fieldName.replace(" ", "").toLowerCase()}
            placeholder={field.placeholder}
            value={sectionData[field.fieldName] || ""}
            onChange={(e) => handleInputChange(field.fieldName, e.target.value)}
          />
        </div>
      ))}
    </form>
  );
}

EditSection.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    toolTipMessage: PropTypes.string.isRequired,
    formFields: PropTypes.arrayOf(
      PropTypes.shape({
        fieldName: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        valueType: PropTypes.oneOfType([
          PropTypes.oneOf(["string", "number", "date"]),
          PropTypes.bool,
        ]).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

function EditSection({ section, sectionData, handleInputChange }) {
  return (
    <div className="edit-section-container">
      <div>
        <TopBar
          sectionName={section.name}
          toolTipMessage={section.toolTipMessage}
        />
        <EditForm
          fields={section.formFields}
          sectionData={sectionData}
          handleInputChange={(fieldName, value) =>
            handleInputChange(section.name, fieldName, value)
          }
        />
      </div>
      <ButtonContainer />
    </div>
  );
}

export default EditSection;

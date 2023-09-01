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

// eslint-disable-next-line react/prop-types
function EditForm({ fields }) {
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
          />
        </div>
      ))}
      <button>Submit</button>
      <button>Edit</button>
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

function EditSection({ section }) {
  return (
    <>
      <TopBar
        sectionName={section.name}
        toolTipMessage={section.toolTipMessage}
      ></TopBar>
      <EditForm fields={section.formFields}></EditForm>
    </>
  );
}

export default EditSection;
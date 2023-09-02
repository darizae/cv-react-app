export const editableSections = [
  {
    name: "General Information",
    toolTipMessage: "Here comes general information.",
    formFields: [
      {
        fieldName: "First Name",
        placeholder: "John Doe",
        valueType: "string",
      },
      {
        fieldName: "Last Name",
        placeholder: "Smith",
        valueType: "string",
      },
      {
        fieldName: "Date of Birth",
        placeholder: "MM/DD/YYYY",
        valueType: "date",
      },
      {
        fieldName: "Nationality",
        placeholder: "American",
        valueType: "string",
      },
    ],
  },
  {
    name: "Education",
    toolTipMessage: "Details about your academic background.",
    formFields: [
      {
        fieldName: "Degree",
        placeholder: "e.g. Bachelor's in Computer Science",
        valueType: "string",
      },
      {
        fieldName: "Institution",
        placeholder: "e.g. Harvard University",
        valueType: "string",
      },
      {
        fieldName: "Graduation Date",
        placeholder: "MM/YYYY",
        valueType: "date",
      },
      {
        fieldName: "Major",
        placeholder: "e.g. Computer Science",
        valueType: "string",
      },
    ],
  },
  {
    name: "Practical Experience",
    toolTipMessage: "Details about your work or practical experience.",
    formFields: [
      {
        fieldName: "Job Title",
        placeholder: "e.g. Software Developer",
        valueType: "string",
      },
      {
        fieldName: "Company",
        placeholder: "e.g. Google",
        valueType: "string",
      },
      {
        fieldName: "Start Date",
        placeholder: "MM/YYYY",
        valueType: "date",
      },
      {
        fieldName: "End Date",
        placeholder: "MM/YYYY or Present",
        valueType: "date",
      },
      {
        fieldName: "Job Description",
        placeholder: "Brief description of your role and responsibilities",
        valueType: "string",
      },
    ],
  },
];

export const editableSections = [
  {
    name: "General Information",
    toolTipMessage: "Here comes general information.",
    formFields: [
      {
        fieldName: "First Name",
        placeholder: "Max",
        valueType: "string",
      },
      {
        fieldName: "Last Name",
        placeholder: "Müller",
        valueType: "string",
      },
      {
        fieldName: "Date of Birth",
        placeholder: "DD/MM/YYYY",
        valueType: "date",
      },
      {
        fieldName: "Nationality",
        placeholder: "German",
        valueType: "string",
      },
      {
        fieldName: "Address",
        placeholder: "Berliner Str. 123, 10178 Berlin",
        valueType: "string",
      },
      {
        fieldName: "Phone",
        placeholder: "+49 170 1234567",
        valueType: "string",
      },
      {
        fieldName: "Email",
        placeholder: "max.mueller@example.de",
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
        placeholder: "e.g. Master's in Biotechnology",
        valueType: "string",
      },
      {
        fieldName: "Institution",
        placeholder: "e.g. Technical University of Munich",
        valueType: "string",
      },
      {
        fieldName: "Graduation Date",
        placeholder: "MM/YYYY",
        valueType: "date",
      },
      {
        fieldName: "Major",
        placeholder: "e.g. Biomedical Engineering",
        valueType: "string",
      },
      {
        fieldName: "Thesis Topic",
        placeholder:
          "e.g. Optimization of CRISPR-Cas9 for Targeted Gene Editing",
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
        placeholder: "e.g. Biotechnologist",
        valueType: "string",
      },
      {
        fieldName: "Company",
        placeholder: "e.g. Bayer AG",
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
        placeholder:
          "e.g. Conducted research on protein synthesis in microorganisms",
        valueType: "string",
      },
    ],
  },
  {
    name: "Languages",
    toolTipMessage: "Languages you speak and your proficiency level.",
    formFields: [
      {
        fieldName: "Language",
        placeholder: "e.g. German",
        valueType: "string",
      },
      {
        fieldName: "Proficiency",
        placeholder: "e.g. Native",
        valueType: "string",
      },
    ],
  },
  {
    name: "Skills & Certifications",
    toolTipMessage:
      "List of technical skills, software proficiency, or certifications.",
    formFields: [
      {
        fieldName: "Skill/Certification",
        placeholder: "e.g. GMP (Good Manufacturing Practice) Certification",
        valueType: "string",
      },
      {
        fieldName: "Proficiency/Details",
        placeholder: "e.g. Expert",
        valueType: "string",
      },
    ],
  },
];

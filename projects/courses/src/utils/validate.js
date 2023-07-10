const validate = (values) => {
  const errors = {};
  const requiredFields = ["company", "firstname", "lastname", "email"];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = true;
    }
  });

  return errors;
};

export default validate;

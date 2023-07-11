export const validate = (formState) => {
  const errors = {};

  // Required fields
  const requiredFields = ["company", "firstname", "lastname", "email", "comment"];
  requiredFields.forEach((field) => {
    if (!formState[field]) {
      errors[field] = "This field is required";
    }
  });

  // Email validation
  if (formState.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      errors.email = "Please enter a valid email";
    }
  }

  return errors;
};

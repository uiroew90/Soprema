const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_FIELDS = ["company", "firstname", "lastname", "email", "comment"];

const isValidEmail = (email) => EMAIL_REGEX.test(email);

export const validate = (formState) => {
  const errors = {};

  // Required fields validation
  REQUIRED_FIELDS.forEach((field) => {
    if (!formState[field]) {
      errors[field] = "This field is required";
    }
  });

  // Email validation
  if (formState.email && !isValidEmail(formState.email)) {
    errors.email = "Please enter a valid email";
  }

  return errors;
};

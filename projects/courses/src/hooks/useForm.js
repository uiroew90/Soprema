import { useState, useEffect } from "preact/hooks";

const useForm = (initialValues, callback, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        callback();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    const errors = validate(values);
    setErrors(errors);
  };

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    validateForm,
  };
};

export default useForm;

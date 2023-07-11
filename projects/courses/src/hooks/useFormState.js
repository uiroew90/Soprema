import { useState, useEffect } from "preact/hooks";

const useFormState = (initialState, validate) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: event.target.required && !event.target.value,
    });
  };

  useEffect(() => {
    // Clear errors when formState changes
    setErrors({});
  }, [formState]);

  return { formState, setFormState, errors, setErrors, handleInputChange };
};

export default useFormState;

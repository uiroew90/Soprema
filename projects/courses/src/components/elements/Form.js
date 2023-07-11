import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Form = ({ children, onSubmit, initialValues = {}, validate, title, error, buttonText }) => {
  // console.log("onSubmit prop in Form:", onSubmit);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate(values);
    setErrors(errors);

    if (errors && Object.keys(errors).length === 0) {
      onSubmit(values);
    }
  };

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <form name="form-course-order" class="std-form mb-0" onSubmit={handleSubmit} novalidate="novalidate">
      <div class="form-display-column">
        <h2 class="form-display-column-title">{title}</h2>
        <div class="form-display-column-wrapper">{children({ values, errors, handleChange })}</div>
      </div>
      {error && (
        <div class="form-group is-error text-center">
          <ul className="form-error">
            <li>{error}</li>
          </ul>
        </div>
      )}
      <p class="form-submit-group">
        <button
          type="submit"
          class="form-button btn btn-primary btn"
          onClick={(event) => {
            onSubmit(event);
          }}
        >
          {buttonText}
        </button>
      </p>
    </form>
  );
};

export default Form;

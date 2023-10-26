import React from "react";

export default ({ label, type, name, value, onChange, required, errors }) => {
  return (
    <div
      className={`form-group form-group--type-text ${type === "textarea" ? "form-group--type-textarea" : ""} ${
        errors[name] ? "is-error" : ""
      }`}>
      <div className='form-label-container'>
        <label className={`control-label ${required ? "required" : ""}`} htmlFor={`form-course-order_${name}`}>
          {label}
        </label>
      </div>
      {type === "textarea" ? (
        <textarea
          inert='true'
          readOnly
          id={`form-course-order_${name}`}
          name={name}
          required={required}
          className='form-control'
          value={value}
          onChange={onChange}></textarea>
      ) : (
        <input
          type={type}
          id={`form-course-order_${name}`}
          name={name}
          required={required}
          className='form-control'
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

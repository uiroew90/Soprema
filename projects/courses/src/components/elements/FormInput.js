import { h } from "preact";

const FormInput = ({ label, type, name, value, onChange, required, errors }) => {
  return (
    <div class={`form-group form-group--type-text ${type === "textarea" ? "form-group--type-textarea" : ""} ${errors[name] ? "is-error" : ""}`}>
      <div class="form-label-container">
        <label class={`control-label ${required ? "required" : ""}`} for={`form-course-order_${name}`}>
          {label}
        </label>
      </div>
      {type === "textarea" ? <textarea id={`form-course-order_${name}`} name={name} required={required} class="form-control" value={value} onChange={onChange}></textarea> : <input type={type} id={`form-course-order_${name}`} name={name} required={required} class="form-control" value={value} onChange={onChange} />}
    </div>
  );
};

export default FormInput;

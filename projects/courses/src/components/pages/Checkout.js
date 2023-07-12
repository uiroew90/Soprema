import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link, route } from "preact-router";

import PageWrapper from "../PageWrapper";
import FormInput from "../elements/FormInput";
import useFormState from "../../hooks/useFormState";

import { validate } from "../../utils/validate";

const Checkout = ({ selectedCourses, setSelectedCourses }) => {
  const { formState, setFormState, errors, setErrors, handleInputChange } = useFormState(
    {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      phone: "",
      fax: "",
      address: "",
      city: "",
      zip: "",
      comment: "",
    },
    validate
  );

  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    // Update errors object
    const formElement = event.target;
    const newErrors = Array.from(formElement.elements).reduce((errors, element) => {
      if (element.required && !element.value) {
        errors[element.name] = true;
      }
      return errors;
    }, {});
    setErrors(newErrors);

    // Check if the form is valid
    const formIsValid = Object.values(newErrors).every((error) => !error);
    if (!formIsValid) {
      // The form is invalid, so don't submit it
      event.preventDefault();
    }
  };

  useEffect(() => {
    // Format selected courses into a text string
    const selectedCoursesText = selectedCourses.map((course) => `• ${course.name}${course.comment ? `\n  "${course.comment}"` : ""}`).join("\n");

    // Update the comment field in the formState
    setFormState((prevState) => ({
      ...prevState,
      comment: selectedCoursesText,
    }));
  }, [selectedCourses]);

  const crumb = {
    home: { href: "/", text: "Home" },
    packs: { href: "/packs", text: "Firmenkurse" },
    courses: { href: "/courses", text: "Kursliste" },
    overview: { href: "/overview", text: "Übersicht" },
    current: { text: "Formular" },
  };

  return (
    <PageWrapper breadcrumbLinks={[crumb.home, crumb.packs, crumb.courses, crumb.overview, crumb.current]} titleText="Formular Firmenkurse">
      <div class="mega-row cms-row vertical-spacing-bottom">
        <div class="container container-medium">
          <div class="row">
            <div class="col col-sm-12">
              <div class="text-element noresize">
                <h2>Kursübersicht</h2>
                <ul class="mini-overview list-none">
                  {selectedCourses.map((course) => (
                    <li class="mb-3">
                      <div class="lead mb-0">{course.name}</div>
                      {course.comment && <blockquote class="mb-0">"{course.comment}"</blockquote>}
                    </li>
                  ))}
                </ul>
                <p>Bitte füllen Sie das folgende Formular aus.</p>
              </div>
            </div>

            <div class="col col-sm-12">
              <form name="form-course-order" method="post" action="https://go.soprema.ch/l/978613/2023-02-24/594nlk" class="std-form mb-0" onSubmit={handleSubmit} novalidate="novalidate">
                <div class="form-display-column">
                  <h2 class="form-display-column-title">Kontaktdaten</h2>
                  <div class="form-display-column-wrapper">
                    <FormInput label="Name" type="text" name="firstname" required={true} value={formState.firstname} onChange={handleInputChange} errors={errors} />
                    <FormInput label="Vorname" type="text" name="lastname" required={true} value={formState.lastname} onChange={handleInputChange} errors={errors} />
                    <FormInput label="Firma" type="text" name="company" required={true} value={formState.company} onChange={handleInputChange} errors={errors} />
                    <FormInput label="E-Mail" type="email" name="email" required={true} value={formState.email} onChange={handleInputChange} errors={errors} />
                    <FormInput label="Telefon" type="text" name="phone" required={true} value={formState.phone} onChange={handleInputChange} errors={errors} />
                    <FormInput label="Fax" type="text" name="fax" required={false} value={formState.fax} onChange={handleInputChange} errors={errors} />

                    <FormInput label="Strasse/Nr." type="text" name="address" required={true} value={formState.address} onChange={handleInputChange} errors={errors} />
                    <FormInput label="Ort" type="text" name="city" required={true} value={formState.city} onChange={handleInputChange} errors={errors} />
                    <FormInput label="PLZ" type="text" name="zip" required={true} value={formState.zip} onChange={handleInputChange} errors={errors} />

                    <FormInput label="Mitteilung" type="textarea" name="order" required={true} value={formState.comment} onChange={handleInputChange} errors={errors} />
                  </div>
                </div>
                {error && (
                  <div class="form-group is-error text-center">
                    <ul className="form-error">
                      <li>{error}</li>
                    </ul>
                  </div>
                )}
                <p class="form-submit-group">
                  <button type="submit" class="form-button btn btn-primary btn">
                    Senden
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Checkout;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import RouteWrapper from "../RouteWrapper";
import FormInput from "../elements/FormInput";
import useFormState from "../../hooks/useFormState";

import { validate } from "../../utils/validate";

export default ({ selectedCourses, setSelectedCourses }) => {
  const { t } = useTranslation();

  const crumb = {
    home: { href: "/", text: t("breadcrumbs.home") },
    packs: { href: "/packs", text: t("breadcrumbs.packs") },
    courses: { href: "/courses", text: t("breadcrumbs.courses") },
    overview: { href: "/overview", text: t("breadcrumbs.overview") },
    current: { text: t("breadcrumbs.checkout") },
  };

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

  return (
    <RouteWrapper breadcrumbLinks={[crumb.home, crumb.packs, crumb.courses, crumb.overview, crumb.current]} titleText={t("routeCheckout.title")}>
      <div className="mega-row cms-row vertical-spacing-bottom">
        <div className="container container-medium">
          <div className="row">
            <div className="col col-sm-12">
              <div className="text-element noresize">
                <h2>{t("routeCheckout.overviewHeader")}</h2>
                <ul className="mini-overview list-none">
                  {selectedCourses.map((course) => (
                    <li key={course.name} className="mb-3">
                      <div className="lead mb-0">{course.name}</div>
                      {course.comment && <blockquote className="mb-0">"{course.comment}"</blockquote>}
                    </li>
                  ))}
                </ul>
                <p>{t("routeCheckout.formMessage")}</p>
              </div>
            </div>

            <div className="col col-sm-12">
              <form name="form-course-order" method="post" action="https://go.soprema.ch/l/978613/2023-02-24/594nlk" className="std-form mb-0" onSubmit={handleSubmit} noValidate="novalidate">
                <div className="form-display-column">
                  <h2 className="form-display-column-title">{t("routeCheckout.formHeader")}</h2>
                  <div className="form-display-column-wrapper">
                    <FormInput label={t("routeCheckout.firstname")} type="text" name="firstname" required={true} value={formState.firstname} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.lastname")} type="text" name="lastname" required={true} value={formState.lastname} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.company")} type="text" name="company" required={true} value={formState.company} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.email")} type="email" name="email" required={true} value={formState.email} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.phone")} type="text" name="phone" required={true} value={formState.phone} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.fax")} type="text" name="fax" required={false} value={formState.fax} onChange={handleInputChange} errors={errors} />

                    <FormInput label={t("routeCheckout.address")} type="text" name="address" required={true} value={formState.address} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.city")} type="text" name="city" required={true} value={formState.city} onChange={handleInputChange} errors={errors} />
                    <FormInput label={t("routeCheckout.zip")} type="text" name="zip" required={true} value={formState.zip} onChange={handleInputChange} errors={errors} />

                    <FormInput label={t("routeCheckout.order")} type="textarea" name="order" required={true} value={formState.comment} onChange={handleInputChange} errors={errors} />
                  </div>
                </div>
                {error && (
                  <div className="form-group is-error text-center">
                    <ul className="form-error">
                      <li>{error}</li>
                    </ul>
                  </div>
                )}
                <p className="form-submit-group">
                  <button type="submit" className="form-button btn btn-primary btn">
                    {t("routeCheckout.buttonText")}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </RouteWrapper>
  );
};

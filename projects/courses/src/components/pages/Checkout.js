import { h, Fragment } from "preact";
import { useEffect } from "preact/hooks";
import { route } from "preact-router";

import PageWrapper from "../PageWrapper";
import Form from "../elements/Form";
import FormInput from "../elements/FormInput";

import useForm from "../../hooks/useForm";
import validate from "../../utils/validate";

const Checkout = ({ selectedCourses, setSelectedCourses }) => {
  const initialValues = {
    company: "",
    firstname: "",
    lastname: "",
    street: "",
    zip: "",
    phone: "",
    fax: "",
    email: "",
    comment: "",
  };

  const onSubmit = async (values) => {
    try {
      // Convert selected courses into a text string
      const selectedCoursesText = selectedCourses.map((course) => `${course.name}: ${course.comment || ""}`).join("\n");
      const formData = { ...values, selectedCourses: selectedCoursesText };

      // Submit the form data to Pardot
      const response = await fetch("https://go.soprema.ch/l/978613/2023-02-24/594nlk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear selected courses and navigate to the thanks page
        setSelectedCourses([]);
        route("/thanks");
      } else {
        // Handle submission error
        throw new Error("Form submit failed.");
      }
    } catch (error) {
      throw new Error(`Submit attempt => ${error.message}`);
    }
  };

  const { handleChange, handleSubmit, values, errors, validateForm } = useForm(initialValues, onSubmit, validate);

  useEffect(() => {
    // Format selected courses into a text string
    const selectedCoursesText = selectedCourses.map((course) => `• ${course.name}${course.comment ? `\n  '${course.comment}'` : ""}`).join("\n");

    // Update the comment field in the formState
    handleChange({ target: { name: "comment", value: selectedCoursesText } });
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
                    <li>
                      <h4>{course.name}</h4>
                      <p>{course.comment}</p>
                    </li>
                  ))}
                </ul>
                <p>Bitte füllen Sie das folgende Formular aus.</p>
              </div>
            </div>

            <div class="col col-sm-12">
              <Form onSubmit={handleSubmit} validate={validateForm} title="Kontaktdaten" error={errors.form} buttonText="Senden">
                {() => (
                  <Fragment>
                    <FormInput label="Firma" type="text" name="company" required value={values.company} onChange={handleChange} errors={errors} />
                    <FormInput label="Name" type="text" name="firstname" required value={values.firstname} onChange={handleChange} errors={errors} />
                    <FormInput label="Vorname" type="text" name="lastname" required value={values.lastname} onChange={handleChange} errors={errors} />
                    <FormInput label="Strasse/Nr." type="text" name="street" value={values.street} onChange={handleChange} errors={errors} />
                    <FormInput label="PLZ/Ort" type="text" name="zip" value={values.zip} onChange={handleChange} errors={errors} />
                    <FormInput label="Telefon" type="text" name="phone" value={values.phone} onChange={handleChange} errors={errors} />
                    <FormInput label="Fax" type="text" name="fax" value={values.fax} onChange={handleChange} errors={errors} />
                    <FormInput label="E-Mail" type="email" name="email" required value={values.email} onChange={handleChange} errors={errors} />
                    <div hidden>
                      <FormInput label="Mitteilung" type="textarea" name="comment" required value={values.comment} onChange={handleChange} errors={errors} />
                    </div>
                  </Fragment>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Checkout;

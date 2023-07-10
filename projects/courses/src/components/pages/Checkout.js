import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Link, route } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';

const Checkout = ({ selectedCourses, setSelectedCourses }) => {
  const [formState, setFormState] = useState({
    firma: '',
    name: '',
    vorname: '',
    strasse: '',
    plzort: '',
    telefon: '',
    fax: '',
    email: '',
    mitteilung: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: event.target.required && !event.target.value,
    });
  };

  const handleSubmit = async event => {
    // Prevent form submission
    event.preventDefault();

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
    const formIsValid = Object.values(newErrors).every(error => !error);
    if (!formIsValid) {
      // The form is invalid, so don't submit it
      return;
    }

    // Convert selected courses into a text string
    const selectedCoursesText = selectedCourses.map(course => `${course.name}: ${course.comment || ''}`).join('\n');
    const formData = { ...formState, selectedCourses: selectedCoursesText };

    // Submit the form data to Pardot
    const response = await fetch('https://go.pardot.com/l/978613/2023-02-24/594nlk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Clear selected courses and navigate to the thanks page
      setSelectedCourses([]);
      route('/thanks');
    } else {
      // Handle submission error
      console.error('Form submission failed:', response.statusText);
    }
  };

  useEffect(() => {
    // Clear errors when formState changes
    setErrors({});
  }, [formState]);

  useEffect(() => {
    // Format selected courses into a text string
    const selectedCoursesText = selectedCourses.map(course => `• ${course.name}${course.comment ? `\n  '${course.comment}'` : ''}`).join('\n');

    // Update the 'mitteilung' field in the formState
    setFormState(prevState => ({
      ...prevState,
      mitteilung: selectedCoursesText,
    }));
  }, [selectedCourses]);

  return (
    <Fragment>
      <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { href: '/courses', text: 'Kursliste' }, { href: '/overview', text: 'Übersicht' }, { text: 'Formular' }]} />

      <Title text="Formular Firmenkurse" />

      <div class="mega-row cms-row vertical-spacing-bottom">
        <div class="container container-medium">
          <div class="row">
            <div class="col col-sm-12">
              <div class="text-element noresize">
                <h2>Kursübersicht</h2>
                <ul class="mini-overview list-none">
                  {selectedCourses.map(course => (
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
              <form name="form-course-order" class="std-form mb-0" onSubmit={handleSubmit} novalidate="novalidate">
                <div class="form-display-column">
                  <h2 class="form-display-column-title">Kontaktdaten</h2>
                  <div class="form-display-column-wrapper">
                    <div class={`form-group form-group--type-text ${errors.firma ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_firma">
                          Firma
                        </label>
                      </div>
                      <input type="text" id="form-course-order_firma" name="firma" required="required" class="form-control" value={formState.firma} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.name ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_name">
                          Name
                        </label>
                      </div>
                      <input type="text" id="form-course-order_name" name="name" required="required" class="form-control" value={formState.name} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.vorname ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_vorname">
                          Vorname
                        </label>
                      </div>
                      <input type="text" id="form-course-order_vorname" name="vorname" required="required" class="form-control" value={formState.vorname} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.strasse ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_strasse">
                          Strasse/Nr.
                        </label>
                      </div>
                      <input type="text" id="form-course-order_strasse" name="strasse" class="form-control" value={formState.strasse} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.plzort ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_plzort">
                          PLZ/Ort
                        </label>
                      </div>
                      <input type="text" id="form-course-order_plzort" name="plzort" class="form-control" value={formState.plzort} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.telefon ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_telefon">
                          Telefon
                        </label>
                      </div>
                      <input type="text" id="form-course-order_telefon" name="telefon" class="form-control" value={formState.telefon} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.fax ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_fax">
                          Fax
                        </label>
                      </div>
                      <input type="text" id="form-course-order_fax" name="fax" class="form-control" value={formState.fax} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text form-group--type-email ${errors.email ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_email">
                          E-Mail
                        </label>
                      </div>
                      <input type="email" id="form-course-order_email" name="email" required="required" class="form-control" value={formState.email} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text form-group--type-textarea ${errors.mitteilung ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_mitteilung">
                          Mitteilung
                        </label>
                      </div>
                      <textarea id="form-course-order_mitteilung" name="mitteilung" required="required" class="form-control" value={formState.mitteilung} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                </div>
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
    </Fragment>
  );
};

export default Checkout;

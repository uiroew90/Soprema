import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Link, route } from 'preact-router';

import PageWrapper from '../PageWrapper';

const Checkout = ({ selectedCourses, setSelectedCourses }) => {
  const [formState, setFormState] = useState({
    company: '',
    firstname: '',
    lastname: '',
    street: '',
    zip: '',
    phone: '',
    fax: '',
    email: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);

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

    try {
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
      const response = await fetch('https://go.soprema.ch/l/978613/2023-02-24/594nlk', {
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
        setError('Form submit failed.');
      }
    } catch (error) {
      setError(`Submit attempt => ${error.message}`);
    }
  };

  useEffect(() => {
    // Clear errors when formState changes
    setErrors({});
  }, [formState]);

  useEffect(() => {
    // Format selected courses into a text string
    const selectedCoursesText = selectedCourses.map(course => `• ${course.name}${course.comment ? `\n  '${course.comment}'` : ''}`).join('\n');

    // Update the comment field in the formState
    setFormState(prevState => ({
      ...prevState,
      comment: selectedCoursesText,
    }));
  }, [selectedCourses]);

  const crumb = {
    home: { href: '/', text: 'Home' },
    packs: { href: '/packs', text: 'Firmenkurse' },
    courses: { href: '/courses', text: 'Kursliste' },
    overview: { href: '/overview', text: 'Übersicht' },
    current: { text: 'Formular' },
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
                    <div class={`form-group form-group--type-text ${errors.company ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_firma">
                          Firma
                        </label>
                      </div>
                      <input type="text" id="form-course-order_firma" name="company" required="required" class="form-control" value={formState.company} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.firstname ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_name">
                          Name
                        </label>
                      </div>
                      <input type="text" id="form-course-order_name" name="firstname" required="required" class="form-control" value={formState.firstname} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.lastname ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_vorname">
                          Vorname
                        </label>
                      </div>
                      <input type="text" id="form-course-order_vorname" name="lastname" required="required" class="form-control" value={formState.lastname} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.street ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_strasse">
                          Strasse/Nr.
                        </label>
                      </div>
                      <input type="text" id="form-course-order_strasse" name="street" class="form-control" value={formState.street} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.zip ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_plzort">
                          PLZ/Ort
                        </label>
                      </div>
                      <input type="text" id="form-course-order_plzort" name="zip" class="form-control" value={formState.zip} onChange={handleInputChange} />
                    </div>
                    <div class={`form-group form-group--type-text ${errors.phone ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label" for="form-course-order_telefon">
                          Telefon
                        </label>
                      </div>
                      <input type="text" id="form-course-order_telefon" name="phone" class="form-control" value={formState.phone} onChange={handleInputChange} />
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
                    <div class={`form-group form-group--type-text form-group--type-textarea ${errors.comment ? 'is-error' : ''}`}>
                      <div class="form-label-container">
                        <label class="control-label required" for="form-course-order_mitteilung">
                          Mitteilung
                        </label>
                      </div>
                      <textarea id="form-course-order_mitteilung" name="comment" required="required" class="form-control" value={formState.comment} onChange={handleInputChange}></textarea>
                    </div>
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

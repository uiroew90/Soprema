import { h, Fragment } from 'preact';
import { Link, route } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';

const Overview = ({ selectedCourses, handleRemoveCourse, handleCourseComment }) => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { href: '/courses', text: 'Kursliste' }, { text: 'Übersicht' }]} />

    <Title text="Übersicht" />

    <div class="mega-row cms-row vertical-spacing-bottom">
      <div class="container container-medium">
        <div class="row justify-content-center">
          <div class="col col-sm-12">
            <div class="guides noresize">
              <div class="guides-wrapper cart-listing">
                {selectedCourses.map(course => (
                  <div class="guides-element cart-listing__item">
                    <div class="small-tule small-tule--light small-tule--image-link">
                      <div class="small-tule-wrapper">
                        <div class="small-tule-container">
                          <div class="small-tule-content cart-listing__item__content std-form wysiwyg mb-0">
                            <p class="small-tule-title text-uppercase">{course.name}</p>
                            <button class="button" onClick={() => handleRemoveCourse(course)}>
                              <svg style="aspect-ratio: 1; vertical-align: -0.125em; width: 1em" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M144 400C144 408.8 136.8 416 128 416C119.2 416 112 408.8 112 400V176C112 167.2 119.2 160 128 160C136.8 160 144 167.2 144 176V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V176C208 167.2 215.2 160 224 160C232.8 160 240 167.2 240 176V400zM336 400C336 408.8 328.8 416 320 416C311.2 416 304 408.8 304 400V176C304 167.2 311.2 160 320 160C328.8 160 336 167.2 336 176V400zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM64 432C64 458.5 85.49 480 112 480H336C362.5 480 384 458.5 384 432V96H64V432z"></path>
                              </svg>
                              &nbsp; Löschen
                            </button>
                            <textarea placeholder="Kommentar" onBlur={e => handleCourseComment(course, e.target.value)} defaultValue={course.comment}></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="col col-sm-12">
            {selectedCourses.length === 0 && (
              <div class="wysiwyg">
                <h2>There are no courses selected.</h2>
                <p>
                  Please go back to <Link href="/packs">Packs</Link> or <Link href="/courses">Courses</Link> before proceeding to checkout.
                </p>
              </div>
            )}
            {selectedCourses.length !== 0 && (
              <div class="wysiwyg text-right">
                <button onClick={() => selectedCourses.length > 0 && route('/checkout')} disabled={selectedCourses.length === 0} class="button">
                  Bestätigen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Overview;

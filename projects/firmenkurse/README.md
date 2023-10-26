# Course Ordering System

This is a single-page application built with Preact for managing course orders. The application allows users to select individual courses or course packs, add comments, and submit a form with their details. The form data is then sent to a Pardot form.

## Features

- Course selection: Users can select individual courses or choose from pre-defined course packs.
- Comments: Users can add comments for each selected course.
- Form submission: User details are collected in a form and sent to a Pardot form.
- Breadcrumb navigation: The application includes a breadcrumb navigation system that updates based on the current route.

## Routes

- `/`: The overview page which displays options to select individual courses or a course pack.
- `/packs`: Displays available course packs. Selecting a pack pre-selects the courses included in the pack.
- `/courses`: Displays a list of available courses. Courses can be selected/deselected.
- `/overview`: Displays a list of selected courses, each with a comment block and a delete button.
- `/checkout`: Displays a form for the user to fill in. On submit, the form data is sent to a Pardot form.
- `/thanks`: Displays a thank you message after successful form submission and resets the ordering system.

## Project Structure

The project is structured into different directories based on the roles of the components:

- `pages`: Contains components that correspond to different routes or "pages" in the application.
- `sections`: Contains components that represent different sections of a page.
- `elements`: Contains smaller, reusable components that might be used in multiple places throughout the application.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.

## Technologies Used

- Preact: A lightweight JavaScript library for building user interfaces.
- Webpack: A static module bundler for modern JavaScript applications.
- Pardot: A software as a service (SaaS) marketing automation platform.

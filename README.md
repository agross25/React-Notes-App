# React Notes App

This web app was designed to allow users to create and sign into personal accounts where they can upload and display personal notes. The admin user is granted access to all notes, uploaded by all users.

# Pages

## Home Page

- when a user visits the website, they are restricted from access to the dashboard (where notes are displayed) until they have signed in.
- the home page offers them 2 options: to either log in to their pre-existing account or to sign up and create a new account.

## Login Page

- if the user clicks the login button, they are redirected to a page where they can input their user credentials.
- if the information entered is incorrect, a relevant message will be displayed, describing the issue to the user.
- directly from this page, the user also has the option to redirect to either the home page or the sign up page

## Sign Up Page

- here, the user again has the options to input an email address and password in order to create an account.
- an error message will be printed to indicate to the user whether their inputted email address is a valid email address, and additionally whether their password is the required length of 6+ characters.

## Dashboard Page

- once a user is signed in, the dashboard is displayed
- a log out button on the top right corner gives the user the option to sign out at any time and be redirected back to the home page
- the user may input and submit a new note to the database
- a user may view his/her own notes, while the authenticated admin may view all notes in the database

# Features

- Dynamically resizes according to screen size
- Different aesthetic fonts and styles
- Opaque background image for increased quality

# Tech Stack

Frontend: React using JavaScript, HTML, CSS
Backend: Supabase
Other Tools: Google Fonts, Google Creative Commons Images

# Future Improvements

- Popup to Confirm Logout
- Show admin which user sent each note

# Running this Project

## System Requirements

- Up-to-date version of Node.js (if using npm)
- Supabase account

## Installation Instructions

git clone https://github.com/agross25/React-Notes-App.git
cd React-Notes-App
npm install

Create supabase project, add URL and anon key to .env

npm start

# Screenshots

## Home Page

![Home Page](src/assets/screenshots/HomePage.png)

## Login Page

![Login Page](src/assets/screenshots/LoginImage.png)

## Signup Page

![Sign Up Page](src/assets/screenshots/SignupImage.png)
![Passwords Do Not Match](src/assets/screenshots/PW.png)

## Dashboard

![Dashboard](src/assets/screenshots/DashboardPage.png)

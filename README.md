# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

<!-- ========================== -->


1) Verify package versions (important)
Make sure React, ReactDOM, and React Router are present and compatible:


npm ls react react-dom react-router-dom
You want to see one version of react and react-dom (and they should match), and react-router-dom ≥ 6.4.

If you see duplicates or missing packages:


npm install react@latest react-dom@latest
2) Start the dev server

npm start
Open the app (usually at http://localhost:3000).
You should be able to click Home / About / Contact and see the correct pages render inside <Outlet />.

3) If you still get “Invalid hook call”
This usually means duplicate Reacts or a bad component. Do these checks:

A. Ensure a single React copy

npm ls react
If you see more than one version (or if it errors), do a clean reinstall:


rm -rf node_modules package-lock.json
npm install
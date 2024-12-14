# Getting Started with Create React App

This project was made with Create React App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Optimizations used

### Memoization with useMemo

The useMemo hook is utilized to optimize performance by memoizing the sorted product list. This prevents unnecessary re-calculations of the sorted list unless there is a change in the products array or the sorting parameter.

### Debouncing

To prevent excessive re-renders and API calls when the user interacts with the price slider, we implemented debouncing using the setTimeout and clearTimeout methods. 

## Design Pattern and Approach

This application follows a component-based architecture, which promotes modularity and reusability. The app's structure is divided into the following key components:

#### UI Components
#### Context Management
#### Services

The application follows a functional programming paradigm by using React functional components combined with hooks such as useState, useEffect, useContext, and useMemo for managing state, side effects, and performance optimizations. 

The app is built with responsive design principles using Flexbox and CSS Media Queries. 

The app dynamically fetches product data from an API based on user-selected filters. To ensure a seamless user experience, data is fetched on initial load and whenever relevant filters (such as category, rating, or price) change.


## Project setup

### Clone the repository


### Navigate into the project directory
cd e-commerce

### Install dependencies
npm install

### Run the app
npm start




# React SpaceX FrontEnd Project

live- https://shivamkumarsingh28.github.io/shivam_frontend_developer/
video- https://drive.google.com/file/d/1j5GmOogYTbmobOIXQktvCv4Xh66zhltd/view?usp=drive_link

React is an open-source JavaScript library for building user interfaces, primarily focused on creating web applications with dynamic, interactive user interfaces. Developed and maintained by Facebook (now Meta), React has gained widespread popularity and is widely used in web development.
## Installation Process: 

To install React and start a new React project, you can use Create React App, a popular tool that sets up a React project with a sensible default configuration. Here's how to install and create a new React project using Create React App:

1. Install Node.js:
If you haven't already, you'll need to install Node.js, which includes npm (Node Package Manager). You can download it from the official website: https://nodejs.org/

2. Create a New React Project:
Once Node.js is installed, open your terminal or command prompt and run the following command to create a new React project using Create React App. Replace "my-react-app" with your preferred project name:

bash
```bash 
npx create-react-app spacex_project
```
This command will fetch the latest version of Create React App and use it to scaffold a new React project in a folder named "spacex_project."

3. Navigate to the Project Directory:
Change your current working directory to the newly created project folder:

bash
```bash 
cd spacex_project
```
4. Start the Development Server:
To start a development server and run your React application, use the following command:


```bash 
npm start
```
This command will start the development server, and your React application will be accessible in your web browser at 
```bash 
http://localhost:3000/. 
```

Any changes you make to your code will automatically trigger hot-reloading, so you can see the updates without manually refreshing the page.

5. Explore Your Project:
Your React project is now set up and ready to go. The default Create React App template includes sample code and files to get you started. You can find your main application code in the "src" directory, and the entry point is usually in "src/index.js."


# Package.json

- ## library #1 React

React provides several hooks that are essential for building functional components with state and side effects. Among these hooks, useState, useEffect, and useContext are commonly used in React applications. Here's an overview of each of these hooks and their uses:

## useState Hook:

Purpose: The useState hook is used to manage state within functional components. It allows you to declare and update state variables in your components.
Usage: You can use it like this:
jsx
```bash 
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

```
Explanation: In this example, the useState hook is used to initialize the count state variable to 0. The setCount function is used to update the count state when the "Increment" button is clicked.

## useEffect Hook:

Purpose: The useEffect hook is used for handling side effects in functional components. It can be used for tasks like data fetching, DOM manipulation, and more.
Usage: Here's a basic example:
jsx
```bash 
import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data and update the state
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array means it runs once after initial render

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

```
Explanation: In this example, the useEffect hook is used to fetch data when the component mounts (due to the empty dependency array). The fetched data is then stored in the data state, which causes a re-render with the updated data.

## useContext Hook:

Purpose: The useContext hook is used to access values from a React context within a functional component. It allows you to share data and functionality between components without having to pass props explicitly.
Usage: Here's a simple example:
jsx
```bash 
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>Current theme: {theme}</div>;
}

```
Explanation: In this example, the useContext hook is used to access the value provided by the ThemeContext. This allows the ThemedComponent to read and display the current theme without the need for prop drilling.
These hooks are fundamental to React development and provide a powerful way to manage state, handle side effects, and work with context in functional components. By using them effectively, you can build dynamic and interactive user interfaces in your React applications.

- ## library #2 React-bootstrap-table

To create a React Bootstrap table with filtering and pagination, you can use the react-bootstrap-table2 library (also known as react-bootstrap-table-next). This library provides a flexible and customizable way to display tables with various features, including filtering and pagination. Here's how you can set up a React Bootstrap table with these features:

Install the Required Packages:

You need to install the necessary packages:

bash
```bash 
npm install react-bootstrap-table2-bootstrap3-paginator react-bootstrap-table-next bootstrap
```

Import the Required Components:

In your React component file, import the necessary components from the installed packages:

jsx
```bash 
import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-bootstrap3-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-bootstrap3-paginator/dist/react-bootstrap-table2-bootstrap3-paginator.min.css';

```


Create Sample Data:

Define some sample data that you want to display in the table. For demonstration purposes, we'll use a simple array of objects:

jsx
```bash 
const sampleData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  // Add more Capsule data here
];

```
Create the Table Component:

Create a functional component that renders the Bootstrap table. In this example, we'll create a table with columns for "ID," "Name," and "Age," along with filtering and pagination:

jsx
```bash 
const MyTable = () => {
  const [data, setData] = useState(sampleData);

  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'name', text: 'Name' },
    { dataField: 'age', text: 'Age' },
  ];

  return (
    <div>
      <h2>React Bootstrap Table</h2>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
};
```


Render the Component:

Finally, render the MyTable component within your main application component:

jsx
```bash 
function App() {
  return (
    <div className="App">
      <MyTable />
    </div>
  );
}
```

export default App;
With this setup, you have a React Bootstrap table that displays the sample data with pagination. You can filter the data by typing in the search box provided by the table. To make this example more dynamic, you can replace sampleData with data from an API or a more complex data source.

Remember to customize the table and pagination settings according to your project's requirements and styling preferences. You can refer to the official documentation of react-bootstrap-table2 for more customization options: https://react-bootstrap-table.github.io/react-bootstrap-table2/


- ## library #3 Tailwind css -optional(css)


Install Dependencies:
Next, you'll need to install the necessary dependencies for Tailwind CSS and PostCSS. Tailwind CSS relies on PostCSS for processing. You can install these packages using npm or yarn:

bash
```bash 
npm install tailwindcss postcss-cli autoprefixer
```


Create a Tailwind CSS Configuration File:
Generate a Tailwind CSS configuration file using the following command:

bash
```bash
npx tailwindcss init -p
```

This command will create a tailwind.config.js file in your project's root directory.

Configure PostCSS:
Create a postcss.config.js file in your project's root directory and configure it to use Tailwind CSS and Autoprefixer:

javascript
```bash
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create a CSS File:
Create a CSS file to include your Tailwind CSS styles. You can create a file like src/index.css and import the Tailwind CSS styles:

css
```bash
/* src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
Import the CSS File in Your React App:
In your src/index.js file, import the CSS file you created:

javascript
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
Using Tailwind CSS Classes:
You can now use Tailwind CSS classes in your React components and stylesheets. For example:

jsx
```bash
import React from 'react';

function MyComponent() {
  return (
    <div className="bg-blue-500 text-white p-4">
      This is a Tailwind CSS component.
    </div>
  );
}
```

export default MyComponent;
Development and Production Builds:
During development, you can run your React app as usual using npm start or yarn start. For production, you should create a production build using npm run build or yarn build.

That's it! You have now installed and set up Tailwind CSS in your React project. You can start using Tailwind CSS classes to style your components and create responsive, customizable designs.

# Deployment - process 

To deploy a React app on GitHub Pages, follow these steps:

1. Create a GitHub Repository:
If you haven't already, create a GitHub repository to host your React app. You can do this through the GitHub website.

2. Set Up Your React App:
Make sure your React app is set up and working locally. You should have a functioning app before proceeding.

3. Install gh-pages Package:
To automate the deployment process, you can use the gh-pages package. Install it as a development dependency in your project:

bash
```bash
npm install gh-pages --save-dev
```

4. Update package.json:
Open your package.json file and add the following two lines at the top level:

json
```bash
"homepage": "https://yourusername.github.io/repo-name",
```
Replace yourusername with your GitHub username and repo-name with the name of your GitHub repository.

Then, add the following scripts under the "scripts" section:

json
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
Your package.json file should look something like this:

json
```bash
{
  "name": "my-react-app",
  "version": "1.0.0",
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  // ...other settings
}
```
5. Deploy to GitHub Pages:
Now, you can deploy your React app to GitHub Pages using the following command:

bash
Copy code
npm run deploy
# or
yarn deploy
This command will build your app (if it's not already built) and publish it to the gh-pages branch of your GitHub repository.

6. Configure GitHub Repository Settings:
On the GitHub website, go to your repository's "Settings" tab. Scroll down to the "GitHub Pages" section, and select the gh-pages branch as the source for GitHub Pages.

7. Access Your Deployed App:
Once GitHub Pages is configured, your React app will be accessible at the URL you specified in the homepage field of your package.json. It may take a few minutes for the changes to take effect.

Your React app should now be deployed and accessible on GitHub Pages. You can share the URL with others, and any updates you make to your app can be redeployed using the npm run deploy or yarn deploy command.

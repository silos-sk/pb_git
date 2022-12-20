import React from 'react';
import Card from '@mui/material/Card';
import { faker } from '@faker-js/faker';

const About = () => {
  return (
    <div>
      <Card className="about">
        <h1>About the App</h1>
        <img src={faker.image.animals()} alt="avatar" />
        <div className="about-content">
        <p>The Animal Alphabet & Words App is created using React with the following skills and dependencies:</p>
        <ul>
          <li>Function Components</li>
          <li>useState and useEffect Hooks</li>
          <li>React Router</li>
          <li>Error Handling</li>
         <li>Fetch API call:</li>
          <ul>
          <li>Local Alphabet API</li>
          <li>External Unsplash API</li>
            </ul>
          <li>Generating Fake Data: Faker</li>
          <li>Usage of CSS Framework: Material UI</li>
          <li>Usage of GitHub repository</li>
        </ul>
        <p>&copy;2022 Shaira Silos | PurpleBeard - Frontend Dev Bootcamp</p>
        </div>
        </Card>
      </div>
  )
}

export default About;
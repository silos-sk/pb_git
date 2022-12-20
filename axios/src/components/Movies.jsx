import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

const Movies = () => {
    const apiKey = "k_q5h4dh46";
    const url = "https://imdb-api.com/en/API/Top250Movies/"
    const [data, setData] = useState({});
    const [error, setError] = useState("")
    useEffect(() => {
        async function apiCall() {
            try {
                const res = await axios.get({url}{apiKey});
                setData(res.data);
            } catch (error){
                setError("There was an error fetching data.");
            }
        };
      });
  return (
    <div>
        <p>The movies are {data}.</p>
    </div>
  )
}

export default Movies
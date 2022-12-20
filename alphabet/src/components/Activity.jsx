import React, { useState, useEffect } from "react";
import axios from "axios";

const Activity = (props)=> {
  const [activity, setActivity] = useState("");
  const [error, setError] = useState("");
  const [word, setWord] = useState("");

  (function setQWord(){
    setWord(props.word);
    return word;
  })();
    
  useEffect((word)=>{
    async function fetchApi(qWord){
    try {
      const data = await axios.get('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',{
      params: {q: {qWord}, pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
      headers: {
        'X-RapidAPI-Key': '03112e2d8amsh1fc7116eaffc708p19324cjsn5e45a3c8f7cb',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }})
      setActivity(data.data.value[0].url)
      return activity
    } catch (e) {
      setError("Something went wrong");
    }
  } fetchApi(word)

  })

  return(
    <div>      
      {activity === "" ? <div>Loading...</div> : (
      <>
        <img src={activity} alt="title"/>
      </>)

      }
      {error && <h3>Something went wrong</h3>}
    </div>
  )

}

export default Activity;

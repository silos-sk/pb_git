import React, { useState, useEffect } from "react";
import lettersList from "../lettersList";
import RenderLetters from "./RenderLetters";
import Word from "./Word";
// import { faker } from '@faker-js/faker';
// import axios from "axios";
// import Activity from "./Activity";

function App() {
  const [letter, setLetter] = useState("");
  // const [image, setImage] = useState("");
  const [letterWord, setLetterWord] = useState("");
  // const [key, setKey] = useState(null);

  function displayLetter(e) {
    const btnLetter = e.target.value;
    setLetter(btnLetter);
  }

  function displayWord(e) {
    const outputWord = e.target.value;
    setLetterWord(outputWord);
  }

  // function letterEvent(e,word){
  //   displayLetter();
  //   displayWord(word);
  // }

  // function getIndex(letter) {
  //   const indexLetter = lettersList.findIndex(obj => obj.letter === letter);
  //   return indexLetter;
  // }

  // function displayImage(){
  //   setImage(<Activity word={lettersList.word} />)
  //   console.log(image);
  //   return image;
  // }

  function comboLetters(a, b) {
    return a + b;
  }

  function alphabet(lettersList) {
    return (
      <div>
        <RenderLetters
          id={lettersList.id}
          key={lettersList.id}
          letter={lettersList.big}
          letters={comboLetters(lettersList.big, lettersList.small)}
          small={lettersList.small}
          setState={displayLetter}
          // setState={letterEvent(lettersList.word)}
          // setImage={displayImage}
        />
        <Word
          id={lettersList.word_id}
          key={lettersList.word_id}
          word={lettersList.word}
          setState={displayWord}
        />
      </div>
    );
  }

  const [res, setRes] = useState("");
  const [error, setError] = useState("");
  const Access_Key = "MYY1R3j3vULm3qNSofnULHqwUgkwCYp6UcQatW-FpVw";

  const fetchRequest = async (word) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=1&query=${word}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    setRes(result);
  }.catch(error{
    return setError(error);
  })
  useEffect(() => {
    fetchRequest(letterWord);
  }, [letterWord]);

  // useEffect(()=>{
  //   async function fetchApi(word){
  //   try {
  //     const data = await axios.get('https://api.unsplash.com/search/photos?page=1',{
  //     params: {query: {word}},
  //     headers: {
  //       'X-RapidAPI-Key': 'MYY1R3j3vULm3qNSofnULHqwUgkwCYp6UcQatW-FpVw',
  //       'X-RapidAPI-Host': 'api.unsplash.com'
  //     }})
  //     setRes(data.results[0].urls.small)

  //   } catch (e) {
  //     setError("Something went wrong");
  //   }
  // } fetchApi(letterWord);

  // }, [letterWord])

  return (
    <div className="container">
      <h1>Alphabet & Words</h1>
      <div className="lettersContainer">{lettersList.map(alphabet)}</div>

      <div className="main">
        {letter.length ? (
          <div className="alpha-block">
            <h2>{letter}</h2>
          </div>
        ) : (
          ""
        )}

        {letterWord.length ? (
          <div className="word-block">
            <h3>{letterWord}</h3>
            {/* <img src={image} alt={letterWord} /> */}
            <div>
              {/* {console.log(res) } */}
              {res === "" ? (
                <div>Loading...</div>
              ) : (
                res.map((val) => {
                  return (
                    <>
                      <img
                        className="word-img"
                        src={val.urls.small}
                        alt="val.alt_description"
                      />
                    </>
                  );
                })
              )}
              {error && <h3>Something went wrong</h3>}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* <h2>{word}</h2> */}
      {/* <Activity word={lettersList[0].word} /> */}
    </div>
  );
}

export default App;

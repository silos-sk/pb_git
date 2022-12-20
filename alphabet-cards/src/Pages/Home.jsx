import React, { useState, useEffect } from "react";
import lettersList from "../lettersList";
import RenderLetters from "../components/RenderLetters";
import Word from "../components/Word";
import { randomNum, comboLetters } from "../index";

function Home() {
  const [letter, setLetter] = useState("");
  const [letterWord, setLetterWord] = useState("");

  function displayLetter(e) {
    const btnLetter = e.target.value;
    setLetter(btnLetter);
  }

  function displayWord(e) {
    const outputWord = e.target.value;
    setLetterWord(outputWord);
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
      `https://api.unsplash.com/search/photos?page=${randomNum}&per_page=1&orientation=landscape&query=${word}&client_id=${Access_Key}`
    ).catch(error =>
      setError(error)
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    setRes(result);
  }
  useEffect(() => {
    fetchRequest(letterWord);
  }, [letterWord]);

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
            <div>
              {res === "" ? (
                <div className="loading">Loading image...</div>
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
    </div>
  );
}

export default Home;

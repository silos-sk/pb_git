import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Header from "./Components/Header/Header";
import Definition from "./Components/Definition/Definition";
import { useEffect, useState } from "react";
import { dictionaryAPI } from "./Utiities/Utilities";

function App() {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (word !== "") {
        const result = await dictionaryAPI("en", word, setMeaning);
        if (result) {
          setMeaning([...result]);
        }
      }
    }
    fetchData();
  }, [word]);

  return (
    <div>
      <Container>
        <Header word={word} setWord={setWord} />
        {meaning && <Definition word={word} meaning={meaning} />}
      </Container>
    </div>
  );
}

export default App;

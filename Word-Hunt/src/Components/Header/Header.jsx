import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useCallback } from "react";
import { debouncedSearch } from "../../Utiities/Utilities";

const Header = ({ word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const handleTextChange = (e) => {
    setWord(e.target.value);
  };

  const optimizedSearchInput = useCallback(
    debouncedSearch(handleTextChange, 1000)
  );

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        {/* <ThemeProvider theme={darkTheme}> */}
        {/* Without debounce */}
        {/* <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          className="search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        /> */}
        {/* With debounce */}
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          className="search"
          onChange={optimizedSearchInput}
        />
        {/* </ThemeProvider> */}
      </div>
    </div>
  );
};

export default Header;

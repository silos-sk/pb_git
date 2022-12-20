import React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container); // 
root.render(<App />);

export const randomNum = Math.floor(Math.random()*10 + 1);
export function comboLetters(a, b) {
    return a + b;
  }
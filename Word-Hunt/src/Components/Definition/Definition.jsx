import React from "react";
import "./Definition.css";

const Definition = ({ word, meaning }) => {
  console.log(meaning);
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subtitle">Start by typing a word in search</span>
      ) : (
        meaning.map((m) =>
          m.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="single-meaning">
                <b>Meaning: {def.definition}</b>
                <hr />
                {def.example && (
                  <span>
                    <b>Example: {def.example}</b>
                  </span>
                )}
                {def.synonyms && def.synonyms.map((s) => `${s}, `)}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;

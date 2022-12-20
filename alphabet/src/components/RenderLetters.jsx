import React from "react";

function RenderLetters(props){
  return(
    <div>
    <button className="lettersBtn" 
    onClick={props.setState}
       value={props.letters}>{props.letter}{props.small}
    </button>
    
    </div>
  )
}

export default RenderLetters;
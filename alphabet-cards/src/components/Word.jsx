import React from 'react'

const Word = (props) => {
  return (
    <div>
        <button className='' onClick={props.setState} value={props.word}>{props.word}</button>
        
    </div>
  )
}

export default Word
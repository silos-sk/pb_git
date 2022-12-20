import React from 'react';
import { Button } from 'semantic-ui-react';

const HeaderBtn = () => {
     const para = document.querySelector('p#message');
  return (
    <div>
        <p id="message" className="hide">It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Button onClick={()=>{
            para.classList.toggle("hide")}}>Learn More</Button>
        
    </div>
  )
}

export default HeaderBtn
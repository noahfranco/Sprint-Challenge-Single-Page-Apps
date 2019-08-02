import React from 'react'

export default function CharacterCard ( props ) {
  return (
     <section> 
      <div>
         <img src={ props.character.image } /> 
       </div> 
     <div>
        <h3> { props.character.name } </h3>
      </div>  
      <div> 
         <p> Status: { props.character.status } </p>
      </div>
      <div> 
         <p> Species: { props.character.species } </p> 
       </div>
       <div>
          <p> Type: { props.character.type } </p> 
       </div> 
       </section> 
  )}; 


 
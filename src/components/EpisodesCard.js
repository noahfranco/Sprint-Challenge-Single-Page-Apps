import React from 'react'

export default function CharacterCard ( props ) {
  return (
     <section> 
      <div>
      <h3> { props.def.name } </h3> 
       </div> 
     <div>
        <p> { props.def.air_date } </p>
      </div>  
      <div> 
        <p> { props.def.episode } </p>
      </div>
       </section> 
  )}; 
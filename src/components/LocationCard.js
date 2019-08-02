import React from 'react'


export default function LocationCard ( props, { name, type, dimension, residents }) {
  return (
    <section> 
      <div>
      <h3> { props.location.name } </h3> 
      </div>
      <div>
        <p> { props.location.type } </p> 
       </div> 
       <div>
        <p> { props.location.dimension } </p>
       </div> 
     </section>
  )
}

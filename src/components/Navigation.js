import React from 'react'; 
import { Link } from "react-router-dom"; 

export default function Navigation() {
    return (
        <section> 
        <div>
           <Link to="/"> Home Page </Link>  
        </div>
        <div> 
           <Link to="characters"> Characters </Link>     
         </div>
         <div>
            <Link to="locations"> Locations </Link>    
         </div>
         <div>
             <Link to="episodes"> Episodes </Link>   
         </div> 
         </section>
    )
}

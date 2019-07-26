import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import LocationCard from "./LocationCard.js"; 

export default function LocationsList() {

const [locationList, setLocationList] = useState([])

useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(here => {
     console.log(here)
     setLocationList(here.data.results); 
    })
    .catch(error => {
        console.log("ERROR!", error);
      });
}, [])

return (
    <section className="main grid-view"> 
    { locationList.map(location => {
      return <LocationCard key={location.id} location={ location } /> 
    })}
    </section>
  )

}

import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import EpisodesCard from "./EpisodesCard"

export default function EpisodesList() {
   
 const [episodesList, setEpisodesList] = useState([])
 
 useEffect(() => {
     axios 
     .get("https://rickandmortyapi.com/api/episode/")
     .then(finish => {
         console.log(finish)
         return setEpisodesList(finish.data.results)
     })
     .catch(error => {
        console.log("ERROR!", error);
      });
 })

 return (
    <section className="character-list grid-view"> 
    { episodesList.map(def => {
      return <EpisodesCard key={def.id} def={ def } /> 
    })}
    </section>
    )
}

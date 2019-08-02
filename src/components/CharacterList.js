import React, { useEffect, useState } from 'react';
import axios from "axios"
import CharacterCard from "./CharacterCard.js"


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

const [characterList, setCharacterList] = useState([]); 

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((value) => {
      console.log(value)
      setCharacterList(value.data.results)
    })
    .catch(error => {
      console.log("ERROR!", error);
    });
    
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []); 
  return(
    <section className="character-list grid-view"> 
    { characterList.map(character => {
      return <CharacterCard key={character.id} character={ character } /> 
    })}
    </section>
  )
}

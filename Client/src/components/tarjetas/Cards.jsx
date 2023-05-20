
import React from 'react';
import Card from '../tarjeta/Card';
import style from './Cards.module.css';

export default function Cards(props) {
  return (
    <div className={style.tarjeta}>
      {
        props.characters.map(character => {
          return (
            <Card
              key={character.id}  
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin?.name}
              image={character.image}
              onClose={props.onClose}
              addFav= {character.addFav}
              removeFav={character.removeFav}
              myFavorites= {character.myFavorites}
            />
          )
        })
      }
    </div>

  )
}

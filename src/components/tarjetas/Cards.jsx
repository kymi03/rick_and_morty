
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
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin?.name}
              image={character.image}
              onClose={props.onClose}
              key={character.id}
            />
          )
        })
      }
    </div>

  )
}

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Detail = () => {
    const [character, setCharacter ] = useState({}) 
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return (
        <div>
            <h1>Detail</h1>
            {
                character ? (
                    <div>
                        <h2>Name: {character.name}</h2>
                        <h2>status: {character.status}</h2>
                        <h2>species: {character.species}</h2>
                        <h2>origin: {character.origin?.name}</h2>
                        {/* <h2>imagen: src={character.image} alt= {character.name}</h2> */}
                        <img src={character.image} alt={character.name} />
                    </div>
                )
                : (
                    ""
                )
            }
        </div>
    )
}
export default Detail;
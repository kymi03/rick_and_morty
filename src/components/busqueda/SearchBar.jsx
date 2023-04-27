import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   function handleChange (event) {
      setId(event.target.value);
   };

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
      }
   }


   return (
      <div className={style.containerSearch}>
         <div className={style.containerInput}>
            <input
               type='search'
               placeholder='Buscar...'
               className={style.input}
               onKeyUp={handleEnter}
               value={id}
               onChange={handleChange}
            />

            <button
               onClick={() => props.onSearch(id)}
               className={style.btn}
            >
               Agregar
            </button>
         </div>
      </div>
   );
}



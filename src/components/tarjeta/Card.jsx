import data from "../../data";
import style from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card(props) {
   // const {name, status, species, gender, origin, image} = props;
   return (

      <div className={style.tarjeta}>

         <div className={style.container}>

            <div className={style.front}>
               <img
                  src={props.image}
                  alt={props.name}
                  className={style.imagen} />
            </div>


            <div className={style.back}>

               <div className={style.containerText}>
               
               <Link to={`/detail/${props.id}`}>
                  <h2 className={style.texto}>{props.name}</h2>
               </Link>
                 
               </div>
               <div className={style.cardButton}>
                  <button
                     onClick={() => props.onClose(props.id)}
                     className={style.boton}>X</button>
               </div>
               <h2 >{props.status}</h2>

               <h2 >{props.species}</h2>

               <h2 >{props.gender}</h2>

               <h2 >{props.origin?.name}</h2>
            </div>

         </div>

      </div>
   );
}

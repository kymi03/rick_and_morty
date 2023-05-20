import data from "../../data";
import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addFav } from "../../redux/actions";
import { removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? props.removeFav(props.id) : props.addFav(props)
      setIsFav(!isFav)
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (

      <div className={style.tarjeta}>

         <div className={style.container}>

            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }

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

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
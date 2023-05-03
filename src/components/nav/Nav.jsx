import React from "react";
import SearchBar from "../busqueda/SearchBar";
import { Link } from 'react-router-dom';

const Nav = (props) => {

    const {onSearch} = props

    const randomClick = () => {
        const randomNum = Math.floor(Math.random() * 826) + 1;
        props.onSearch(randomNum);
    }
    return (
        <>

        <SearchBar onSearch={onSearch} />

        <button onClick={randomClick}>
            random
        </button>

        <Link to='/about' >
        
            <button>About</button>

        </Link>

        <Link to='/home' >
        
            <button>Home</button>

        </Link>
        
        <Link to='/favorites' >
        
            <button>Favorites</button>

        </Link>
        
        

        
        </>
    )
}
export default Nav;
import './App.css';
import SearchBar from './components/busqueda/SearchBar';
import Nav from './components/nav/Nav';
import Cards from './components/tarjetas/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';


const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {


    const [characters, setCharacters] = useState([]);

    const { pathname} = useLocation();

    // function onSearch() {
    //     setCharacters([
    //         ...characters,
    //         example
    //     ])
    // }

    function onSearch(id) {

        let existen = characters.find(character => character.id === Number(id))

        if (existen) {
            window.alert("ya existe este personaje en la lista")
            return;
        }
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        })
            .catch(error => window.alert('¡No hay personajes con este ID!'));
    }

    // function onClose(id) {

    // }

    function onClose(id) {
        let filteredCharacters = characters.filter(character => character.id !== Number(id));
        setCharacters(filteredCharacters);
    }





    return (
        <div className='App'>
            <Nav onSearch={onSearch} />

            <Routes>

                <Route path='/home' element={<Cards  characters={characters} onClose={onClose}/>} />

                <Route path='/about' element={<About/>} />

                <Route path='/detail/:id' element={<Detail/>} />

                <Route path='/' element={<Form/>}/>



                





            </Routes>


        </div>
    );
}

export default App;

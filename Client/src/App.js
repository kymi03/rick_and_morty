import './App.css';
import SearchBar from './components/busqueda/SearchBar';
import Nav from './components/nav/Nav';
import Cards from './components/tarjetas/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


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

    const [access, setAccess] = useState(false);

    const EMAIL = 'kimysabela03@gmail.com';
    const PASSWORD = 'issabella12';

    const { pathname } = useLocation();

    const navigate = useNavigate();

    function onSearch(id) {

        let existen = characters.find(character => character.id === Number(id))

        if (existen) {
            window.alert("ya existe este personaje en la lista")
            return;
        }
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        })
            .catch(error => window.alert('¡No hay personajes con este ID!'));
    }

    function onClose(id) {
        let filteredCharacters = characters.filter(character => character.id !== Number(id));
        setCharacters(filteredCharacters);
    }

    
    const login = (userData) => {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
        }
    }
    
    
    useEffect(() => {
        !access && navigate('/');
    }, [access]);



    return (
        <div className='App'>

            {pathname !== '/' && <Nav onSearch={onSearch} />}

            <Routes>

                <Route path='/' element={<Form  login= { login }/>} />

                <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

                <Route path='/about' element={<About />} />

                <Route path='/detail/:id' element={<Detail />} />

                <Route path='/favorites' element={<Favorites />}/>
            </Routes>


        </div>
    );
}

export default App;

// const http = require('http');
// const { getCharById } = require('./controllers/getCharById')
// const PORT = 3001

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     //    /rickandmorty/character/2
//     if(req.url.includes('/rickandmorty/character')) {
//         const id = req.url.split('/').at(-1)

//         getCharById(res, id)

//         // let characterFilter = characters.find((character)=> character.id === Number(id))

//         // res.writeHead(200, {"Content-Type": "application/json"})
//         // res.end(JSON.stringify(characterFilter))
//     }
// }).listen(PORT, console.log("port on 3001"))

const express = require('express');
const server = express();
const PORT = 3001

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });


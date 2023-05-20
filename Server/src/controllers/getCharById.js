// const axios = require('axios')


// const getCharById = (res, id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((result)=> result.data)
//     .then((data)=>{
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin.name,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, {"Content-type": "application/json"})
//         res.end(JSON.stringify(character))
//     })

//     .catch((error)=> {
//         res.writeHead(500, {"Content-type": "text/plain"})
//         res.end(error.message)
//     })
// }

// module.exports = {
//     getCharById
// };

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = (req, res)=> {
    const { id } = req.params;
    axios(URL + id)
    .then(({ data })=> {
        const { id, status, name, species, origi, image, gender } = data
        const character = { id, status, name, species, origi, image, gender }

        return character ? res.json(character)
        : res.status(404).send("Not Found")
    })
    .catch((error)=>{
        return res.status(500).send(error.message)
    })
}

module.exports = {
    getCharById
}
const { pets } = require('../database/pets')

function readPets() {
    return pets
}

module.exports = {
    readPets
}
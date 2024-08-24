const { pets } = require('../database/pets')

function deletePet(id) {
    const index = pets.findIndex(pet => pet.id === id)
    pets.splice(index, 1)
}

module.exports = {
    deletePet
}
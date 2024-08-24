const { pets } = require('../database/pets')

function updatePet(id, name, type, breed, age, owner) {
    const index = pets.findIndex(pet => pet.id === id)
    pets[index] = {
        id,
        name,
        type,
        breed,
        age,
        owner
    }
}

module.exports = {
    updatePet
}
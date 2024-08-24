const { pets } = require('../database/pets')

function addNewPet(id, name, type, breed, age, owner) {
    
    const newPet = {
        id,
        name,
        type,
        breed,
        age,
        owner
    }

    pets.push(newPet)
}

module.exports = {
    addNewPet
}
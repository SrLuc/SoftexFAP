const { addNewPet } = require("./controllers/createPet")
const { deletePet } = require("./controllers/deletePet")
const { readPets } = require("./controllers/readPets")
const { updatePet } = require("./controllers/updatePet")

addNewPet(5, 'Luna', 'Cat', 'Persian', 1, 'Eve White')
deletePet(2)
updatePet(3, 'name', 'Bella', "Poodle", 4, 'John Doe')

console.log(readPets())


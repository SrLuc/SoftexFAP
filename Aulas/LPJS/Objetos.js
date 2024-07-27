
const pessoa = {
    nome: 'João',
    idade: 25,
    endereco: {
        rua: 'Rua 1',
        numero: 123
    }
}

const animal = {
    nome: 'Rex',
    idade: 3,
    raca: 'Vira-lata',
    dono: pessoa,

    latir: function () {
        console.log('Au au');
    }
}


const brinquedo = {
    nome: 'Bola',
    preco: 20,
    dono: animal,

    brincar: function () {
        console.log('Brincando com a bola');
    }


}
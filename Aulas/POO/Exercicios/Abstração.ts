abstract class Transporte {
    andar():string{
        return `andando..`
    }
}

class Carro extends Transporte {

}
const fiat = new Carro()

console.log(fiat.andar());

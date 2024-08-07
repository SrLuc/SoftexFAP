abstract class Transporte {
  nome: string;

  ligar() {}
  move() {}
  desliga() {}

}

class Carro extends Transporte {}
class Moto extends Transporte {}
class Barco extends Transporte {}
class Aviao extends Transporte {}

const carro = new Carro();
const moto = new Moto();
const barco = new Barco();
const avaio = new Aviao();

carro.ligar()
moto.ligar()
barco.move()
avaio.desliga()

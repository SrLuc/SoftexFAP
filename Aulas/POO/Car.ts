//Exemplo de Classe Abstração

class Carro {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  ligado: boolean;

  constructor(
    marca: string,
    modelo: string,
    ano: number,
    cor: string,
    ligado: boolean
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligado = ligado;
  }

  ligar() {
    this.ligado = true;
    console.log("O carro está ligado");
  }

  desligar() {
    this.ligado = false;
    console.log("O carro está desligado");
  }

  acelerar() {
    if (this.ligado) {
      console.log(`O carro ${this.marca} ${this.modelo} está acelerando`);
    } else {
      console.log("O carro está desligado");
    }
  }

  frear() {
    if (this.ligado) {
      console.log(`O carro ${this.marca} ${this.modelo} está freando`);
    } else {
      console.log("O carro está desligado");
    }
  }
}

let carro1 = new Carro("chevrolet", "onix", 2020, "branco", false);

carro1.ligar();
carro1.acelerar();
carro1.frear();
carro1.desligar();
carro1.acelerar();
carro1.frear();

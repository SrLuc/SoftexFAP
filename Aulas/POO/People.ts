class Pessoa {
  nome: string;
  idade: number;
  altura: number;
  peso: number;

  constructor(nome: string, idade: number, altura: number, peso: number) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }

  andar() {
    console.log(`${this.nome} está andando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  dormir() {
    console.log(`${this.nome} está dormindo`);
  }
}

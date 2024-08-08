class Animal {
  fazerSom() {
    console.log("Algum som de animal");
  }

  mover() {
    console.log("Movendo-se");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au Au");
  }
}

class Gato extends Animal {
  fazerSom() {
    super.fazerSom(); // Chama o método fazerSom() da classe Animal
    super.mover();
    console.log("Miau");
  }
}

let meuCachorro = new Cachorro();
//meuCachorro.fazerSom(); // Saída: "Au Au"

let meuGato = new Gato();
//meuGato.fazerSom(); // Sáida: "Miau"

///////////////////////////-------  EXEMPLO 2  ----///////////////////////////////////

// Classe Base
class Pessoa {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirInfo(): string {
    return `Nome: ${this.nome}, Idade: ${this.idade}`;
  }
}

class Estudante extends Pessoa {
  public matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  exibirInfo(): string {
    return `${super.exibirInfo()}, Matrícula: ${this.matricula}`;
  }
}

const estudante = new Estudante("João", 20, "123456");
//console.log(estudante.exibirInfo());



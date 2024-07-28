//Exemplo de herança em TypeScript

class Animal {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public emitirSom(): void {
    console.log("Som de animal");
  }
}

class Gato extends Animal {
  raca: string;
  constructor(nome: string, idade: number, raca: string) {
    //diz de fato quais são os atributos que a classe pai tem e que a classe filha também terá
    super(nome, idade);
    this.raca;
  }

  public emitirSom(): void {
    console.log("Miau");
  }
}

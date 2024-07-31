// Objetivo: Exemplo de uma classe em TypeScript

class Exemplo {
  atributo1: string;
  atributo2: number;
  atributo3: boolean;
  atributo4: string[] | number[];

  constructor(
    atributo1: string,
    atributo2: number,
    atributo3: boolean,
    atributo4: string[] | number[]
  ) {
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
    this.atributo3 = atributo3;
    this.atributo4 = atributo4;
  }

  metodo1(): void {
    console.log("Executando o Método 1");
  }

  metodo2(): void {
    console.log("Executando o Método 2");
  }

  metodo3(): void {
    console.log("Executando o Método 3");
  }
}


const exemplo1 = new Exemplo("string", 1, true, ["string", "string"]);

console.log(exemplo1);
exemplo1.metodo1();

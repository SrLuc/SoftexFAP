class Pessoa {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  private setNome(nome: string): void {
    this.nome = nome;
  }

  private setIdade(idade: number): number {
    return (this.idade = idade);
  }

  public changeName(novoNome: string): void {
    return this.setNome(novoNome);
  }

  public changeIdade(novaIdade: number): number {
    return this.setIdade(novaIdade);
  }
}

const pessoa = new Pessoa("João", 30);

pessoa.nome = "Ruan";
console.log(pessoa.idade);
console.log(pessoa.changeName("Rinaldo"));
console.log(pessoa.changeIdade(45));

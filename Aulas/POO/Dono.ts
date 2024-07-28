//Exemplo de Encapsulamento
//Encapsulamento é quando você restringe o acesso a alguns componentes da classe
//Em TypeScript, o encapsulamento é feito através dos modificadores de acesso

class Dono {
  public nome: string;
  private cpf: string;

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  getCPF(): string {
    return this.cpf;
  }
}

const dono1 = new Dono("Ruan", "123.456.789-00");
console.log(dono1.nome);
//console.log(dono1.cpf); 

//Exemplo de Poliformismo
//Poliformismo é quando uma classe filha sobrescreve um método da classe pai
//O método sobrescrito é chamado de método polimórfico

class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularSalario(): number {
    return this.salario;
  }
}

class Gerente extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularSalario(): number {
    return this.salario + 1000;
  }
}

const funcionario1 = new Funcionario("Ruan", 1000);
console.log(funcionario1.calcularSalario());

const gerente1 = new Gerente("Ruan", 1000);
console.log(gerente1.calcularSalario());

//Faça uma classe para um Animal, com os atributos nome e idade e um método que retorna o som que o animal faz.

//faça uma classe funcionario com um método aumentar salario e mostrar salaraio;

class Funcionario {
  salario: number;

  constructor(salario: number) {
    this.salario = salario;
  }

  aumentarSalario(value: number): number {
    this.salario += value;
    return this.salario
  }

  mostrarSalario(): number {
    return this.salario;
  }
}

const fun1 = new Funcionario(1000);
console.log(fun1.mostrarSalario());
console.log(fun1.aumentarSalario(500));

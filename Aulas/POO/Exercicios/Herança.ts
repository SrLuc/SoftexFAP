class Veiculo {
  public marca: string;
  public modelo: string;
  public ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo() {
    return `Informações do Véiculo: Modelo:${this.modelo}, Marca:${this.marca}, Ano:${this.ano}`;
  }
}

class Carro extends Veiculo {
  public numeroDePortas: number;

  constructor(
    marca: string,
    modelo: string,
    ano: number,
    numeroDePortas: number
  ) {
    super(marca, modelo, ano);
    this.numeroDePortas = numeroDePortas;
  }

  exibirInfo(): string {
    return `Informações do Véiculo: Modelo:${this.modelo}, Marca:${this.marca}, Ano:${this.ano}, Numero de Portas${this.numeroDePortas}`;
  }
}

class Moto extends Veiculo {
  public tipoDeGuida: string;

  constructor(marca: string, modelo: string, ano: number, tipoDeGuida: string) {
    super(marca, modelo, ano);
    this.tipoDeGuida = tipoDeGuida;
  }

  exibirInfo(): string {
    return `Informações do Véiculo: Modelo:${this.modelo}, Marca:${this.marca}, Ano:${this.ano}, Tipo de Guidão${this.tipoDeGuida}`;
  }
}

const meuCarro = new Carro("Jeep", "Renegade", 2024, 5);
const minhaMoto = new Moto("Yamaha", "Fazer", 2024, "Curvado");

console.log(meuCarro.exibirInfo());
console.log(minhaMoto.exibirInfo());

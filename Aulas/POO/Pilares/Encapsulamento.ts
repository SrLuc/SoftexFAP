class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }
}

const pessoa = new Pessoa('João', 30);
console.log(pessoa.getNome()); 
pessoa.setNome('Maria');
console.log(pessoa.getNome()); 

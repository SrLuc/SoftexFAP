abstract class Usuario {
  protected nome: string;
  protected email: string;
  protected senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  abstract visualizarPerfil(): void;
}

class Produto {
  constructor(public nome: string, public preco: number) {}
}

class Cliente extends Usuario {
  private carrinho: Produto[] = [];

  constructor(nome: string, email: string, senha: string) {
    super(nome, email, senha);
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinho.push(produto);
    console.log(`${produto.nome} adicionado ao carrinho.`);
  }

  visualizarCarrinho(): void {
    console.log("Itens no carrinho:");
    this.carrinho.forEach((produto) =>
      console.log(`- ${produto.nome}: R$${produto.preco}`)
    );
  }

  visualizarPerfil(): void {
    console.log(`Perfil do Cliente: ${this.nome}, ${this.email}`);
  }
}

class Administrador extends Usuario {
  private produtos: Produto[] = [];

  constructor(nome: string, email: string, senha: string) {
    super(nome, email, senha);
  }

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`${produto.nome} adicionado ao catálogo.`);
  }

  visualizarProdutos(): void {
    console.log("Produtos no catálogo:");
    this.produtos.forEach((produto) =>
      console.log(`- ${produto.nome}: R$${produto.preco}`)
    );
  }

  visualizarPerfil(): void {
    console.log(`Perfil do Administrador: ${this.nome}, ${this.email}`);
  }
}

const admin = new Administrador("Alice", "alice@admin.com", "admin123");
const cliente = new Cliente("Bob", "bob@cliente.com", "cliente123");

const produto1 = new Produto("Notebook", 2500);
const produto2 = new Produto("Smartphone", 1500);

admin.adicionarProduto(produto1);
admin.adicionarProduto(produto2);

admin.visualizarProdutos();

cliente.adicionarAoCarrinho(produto1);
cliente.visualizarCarrinho();

admin.visualizarPerfil();
cliente.visualizarPerfil();

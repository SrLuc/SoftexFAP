interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

const produtos: Produto[] = [
  {
    id: 1,
    nome: "camisa",
    preco: 25,
    categoria: "roupas",
  },
  {
    id: 2,
    nome: "calça",
    preco: 21,
    categoria: "roupas",
  },
];


function addProduto(produto: Produto): Produto {
  produtos.push(produto)
  return produto;
}

const novoProduto = {
  id: 4,
  nome: "chapeu",
  preco: 25,
  categoria: "acessorios",
}

addProduto(novoProduto)

console.log(produtos);

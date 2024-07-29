function verificarNumero(num: number): string {
  if (num > 0) {
    return "O número é positivo";
  } else if (num === 0) {
    return "O número é zero";
  } else {
    return "O número é negativo";
  }
}

console.log(verificarNumero(5));
console.log(verificarNumero(0));
console.log(verificarNumero(-3));

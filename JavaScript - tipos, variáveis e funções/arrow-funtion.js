// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1+ num2;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}


// Hoisting (puxando as declarações para cima do código): arrow function se comporta como expressão e também não tem suporte à hoisting.
// Hoisting: funções e var são "listadas" no topo do arquivo.
// Operador maior ou igual que >=
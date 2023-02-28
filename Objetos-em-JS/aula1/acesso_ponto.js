const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122333345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e esta pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)
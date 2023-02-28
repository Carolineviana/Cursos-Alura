const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: "1122333345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e esta pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "CPF", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})
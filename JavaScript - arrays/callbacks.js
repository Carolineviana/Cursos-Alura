const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  console.log(nome);
});


// Arrow function
nomes.forEach((nome) => {
  console.log(nome);
});


function imprimeNome(nome) {
    console.log(nome);
  }
  
  nomes.forEach(imprimeNome);
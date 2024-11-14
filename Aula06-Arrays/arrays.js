const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

console.log("Bia fez aniversário e convidou:", listaDeConvidados);
console.log("Quantos convidados?", listaDeConvidados.length);

// 1. Matheus
// 2. Izabelli
// 3. Amanda
// 4. Paula

console.log("Convidado numero 1:", listaDeConvidados[0]);
console.log("Convidado numero 4:", listaDeConvidados[listaDeConvidados.length -1]);
console.log("convidado numero 3:", listaDeConvidados[2]);

const indiceAmanda = listaDeConvidados.indexOf("Amanda");
console.log("Amanda está em qual indice do nosso array?", indiceAmanda);
console.log("Amanda está em qual número da lista?", indiceAmanda + 1);

// const arrayQualquer = ["Beatriz", true, 24, {valor1: 10, valor2: 20}];
// console.log(arrayQualquer);
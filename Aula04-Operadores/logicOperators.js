// AND / OR / NOT

console.log("Maria foi parada em uma blitz");

const idadeMaria = 18;
const mariaPossuiCNH = false;

// AND
console.log("Maria vai ser presa?", idadeMaria >= 18 && mariaPossuiCNH === false);

// ------------------------------------------
console.log ('-------------------------')

console.log("Maria foi para a balada e na entrada precisava mostrar documento");

const mariaPossuiRG = true;
console.log("Maria levou seu RG? ", mariaPossuiRG);

console.log("Maria é maior de idade?", idadeMaria >= 18);

// OR   
console.log("Maria conseguiu comprovar que é maior de idade?", mariaPossuiCNH === true || mariaPossuiRG === true);

console.log("Maria entrou na balada!");

// -------------------

console.log("------------------")
// NOT

const gostaDeBeber = true;

const mariaGostaDeBeber = !gostaDeBeber;
console.log("Maria gosta de beber?" , mariaGostaDeBeber);
const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

// Push / Pop / Shift / Unshift

listaDeConvidados.push("Leonardo"); // push -> adiciona no final do array
listaDeConvidados.pop(); // pop -> remove o último item do array
listaDeConvidados.unshift("Beatriz") // unshift -> adicioma como 1° item do array
listaDeConvidados.shift(); // shift -> remove o primeiro item a lista

console.log(listaDeConvidados);

console.log("Amanda está na lista?", listaDeConvidados.includes("Amanda"));
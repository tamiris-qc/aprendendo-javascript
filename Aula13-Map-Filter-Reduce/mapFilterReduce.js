const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP

const distanciasEmKm = distanciaEmMetros.map(distancia => distancia / 1000);
console.log("Distancia em KM: ", distanciasEmKm)

// FILTER
const itensFiltrados = distanciaEmMetros.filter(distancia => distancia > 2000);
   
console.log("ItensFiltrados: ", itensFiltrados);

// REDUCE
const distanciaTotal = distanciaEmMetros.reduce( (acc, distancia) => {
    return acc + distancia 

}, 0);

console.log("Distancia Total: ", distanciaTotal);
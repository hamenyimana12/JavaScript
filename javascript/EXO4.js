let tableau = [7, 17, 14, 49, 46, 88, 20];

let elementMax = 0

for (let i = 0; i < tableau.length; i++) {
    const nombre = tableau[i];
    if (nombre> elementMax){
        elementMax = nombre
    }
}
console.log("Le tableau est :", tableau);
console.log("L'élément le plus grand est :", elementMax);

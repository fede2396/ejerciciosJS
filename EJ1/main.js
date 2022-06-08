let pizza = ['Harina', 'Aceite', 'Sal', 'Levadura', 'Tomate', 'Cebolla', 'Queso', 'Huevo', 'Jamon', 'Morron'];


filtro(pizza);
    
function filtro (obj) {
let IngredientesPares = [];
let IngredientesImpares = [];
pizza.forEach(function(obj) {
    if (obj.length %2===0) {
        IngredientesPares.push(obj);
    } else {
        IngredientesImpares.push(obj);
    }

})
console.log ("Ingredientes Pares");
console.log(IngredientesPares);
console.log ("Ingredientes Impares")
console.log(IngredientesImpares);
}




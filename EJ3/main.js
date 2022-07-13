function Pizza (nombre , ingredientes , precio ,id) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.id = id;
    
}


let fugazza = new Pizza('Fugazza', ['Queso, Cebolla'], 790,1);
let muzzarella = new Pizza('Muzarella', ['Queso', 'Salsa'], 590,2);
let napolitana = new Pizza('Napolitana', ['Queso', 'Tomate', 'Albahaca','Salsa'], 660,3);
let hawaiana = new Pizza('Hawaiana', ['Queso', 'Ananá'], 850, 4);
let pepperoni = new Pizza('Pepperoni', ['Queso', 'Peperoni', 'Salsa'], 800, 5);

let pizzas = [fugazza, muzzarella , napolitana ,hawaiana ,pepperoni ];

let pizzaFound = document.querySelector('.pizza-search');

let pizzaPrice = document.querySelector('.pizza-price');

let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', searchPizzaId);

function searchPizzaId (){
    let getId = document.getElementById('pizza-id').value;
    const searchPizza = pizzas.find(({id}) => id == getId);
    console.log(searchPizza);

    if(!searchPizza){
        pizzaFound.innerHTML = 'Pizza no encontrada';
        pizzaPrice.innerHTML = '';
    }else{
        console.log(searchPizza.id);
        pizzaFound.innerHTML = searchPizza.nombre;
        pizzaPrice.innerHTML = `$${searchPizza.precio}`

    }
}
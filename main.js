const productos = [
    {
        titulo : "computadora portatil",
        imagen:"notebook.jpg",
        precio: 3500,
        id: "compuportatil"

},
    {
        titulo : "computadora de escritorio", 
        imagen:"computadora.jpg",
        precio: 1500,
        id: "compuesc"
},
    {
        titulo : "silla gamer" ,
        imagen:"sillagamer.jpg",
        precio: 800,
        id: "sillaG"
},
    {
        titulo : "silla comun",
        imagen:"silla.jpg",
        precio: 400,
        id: "sillaC"
},
    {
        titulo : "teclado y mouse inalambricos" ,
        imagen:"teclado.jpg",
        precio: 1000,
        id: "teci"
},
    {
        titulo : "teclado y mouse con cable",
        imagen:"teclado.jpg",
        precio: 600,
        id: "tecc"
},
    {
        titulo : "auriculares inalambricos",
        imagen:"auricularesgamer.jpg",
        precio: 800,
        id: "auri"
},
    {
        titulo : "auriculares con cable",
        imagen:"auriculares.jpg",
        precio: 400,
        id: "auric"
}

];

const contProd = document.querySelector("#contenedor-prod");
let botonAgregar = document.querySelectorAll(".producto-agregar");
const total = document.querySelector(".total");
let sumaTotal = document.querySelector(".sumaTotal");
function carga (){
    
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src ="${producto.imagen}" alt ="${producto.titulo}">
        <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">$${producto.precio}</p>
          <button class="producto-agregar" id = ${producto.id}>Agregar</button>
        </div>
        `;

        contProd.append(div);
    })
    botonAgregado();
}
carga();

function botonAgregado(){
    botonAgregar = document.querySelectorAll(".producto-agregar");
    botonAgregar.forEach( boton => {
        boton.addEventListener("click", agregarCarrito);
    })
}

const agregados = [];
let suma = 0;

function agregarCarrito (e){
    const id = e.currentTarget.id;
    const prodAgregado = productos.find(producto => producto.id === id);
    
    suma += prodAgregado.precio


    agregados.push(prodAgregado);
    localStorage.setItem("productosCarrito", JSON.stringify(agregados));
    

    console.log(agregados);
    console.log(suma);

    
    localStorage.setItem("suma",suma);
    let sumaLocal = localStorage.getItem("suma");
    sumaTotal.innerHTML = "$" + suma;

}



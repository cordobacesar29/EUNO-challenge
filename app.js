// -- #1 Crear un objeto producto --
const producto = {};

const arrayProductos = [];

const nameInput= document.getElementById("nombre");
const colorInput = document.getElementById("color");
const pesoInput = document.getElementById("peso");
const button = document.getElementById('boton');
const buttonDelete = document.querySelector('.boton-eliminar');
const buttonEdit = document.querySelector('.boton-editar');

button.addEventListener("click", () => {
  addProducto(totalProductos(), nameInput.value, colorInput.value, pesoInput.value);
  listarProductos();
  console.log(getAllProductos())
});

for (let i = 0; i < arrayProductos.length; i++) {
  if (arrayProductos[i].id === id) {
    buttonDelete.addEventListener("click", deleteProducto(id) )
  }
}


// -- #2 Crear una función que permita añadir un producto dentro de un array --
const addProducto = ( id, nombre, color, peso ) => {
  const data = {};
  data.id = id;
  data.nombre = nombre; 
  data.color = color;
  data.peso = peso;

  arrayProductos.push( data );
};

// -- #3 Crear una función que permita obtener el total de productos del array --
const totalProductos = () => {
  return arrayProductos.length;
};


// -- #4 Crear una función que permita actualizar un producto --
const updateProducto = ( id, nombre, color, peso ) => {
  for (let i = 0; i < arrayProductos.length; i++) {
    if (arrayProductos[i].id === id) {
      arrayProductos[i].nombre = nombre;
      arrayProductos[i].color = color;
      arrayProductos[i].peso = peso;
    }
  }
};
updateProducto(totalProductos(), nameInput.value, colorInput.value, pesoInput.value);

// -- #5 Crear una función que permita eliminar un producto --
const deleteProducto = ( id ) => {
  for (let i = 0; i < arrayProductos.length; i++) {
    if (arrayProductos[i].id === id) {
      arrayProductos.splice(i,1);
    }
  }
};

// -- #6 Crear una función que permita obtener todos los productos --
const getAllProductos = () => {
  return arrayProductos;
};

// -- función para listar productos y mostrar en pantalla --
const listarProductos = () => {
  const lista = document.getElementById('tbody');
  lista.innerHTML = "";
  for (let i = 0; i < arrayProductos.length; i++) {
    lista.innerHTML += `
    <th id="nombre-producto">${arrayProductos[i].nombre}</th>
    <th id="color-producto">${arrayProductos[i].color}</th>
    <th id="peso-producto">${arrayProductos[i].peso}</th>
    <th>
      <button type="submit" id="${arrayProductos[i].id}" class="boton-editar">Editar</button>
    </th>
    <th>
      <button type="submit" id="${arrayProductos[i].id}" class="boton-eliminar">Borrar</button>
    </th>
    `;
  }
};
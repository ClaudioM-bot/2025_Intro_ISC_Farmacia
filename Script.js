let nombre = "Claudio, ¿que vas a categorizar?"
console.log(`bienvenido ${nombre}`);

const listaItems = document.getElementById("listaItems");
const itemInput = document.getElementById("itemInput");

function agregarItem() {
    const nuevoItem = itemInput.value;
    console.log(nuevoItem)
    if (nuevoItem ==="") {
        alert(" ingrese un nombre valido. ")
        return;
    }

 //Crear Nuevo Elemento
 const li = document.createElement("li");
 li.className = "item-elemento";
 const itemSpan = document.createElement("span");
 itemSpan.textContent = nuevoItem;
 li.appendChild(itemSpan);
 
 const accionesDiv = document.createElement("div");
 accionesDiv.className = "acciones";

 //Crear Boton de Editar
 const btnEditar = document.createElement("button");
 btnEditar.textContent = "Editar";
 btnEditar.onclick = () => editarItem(li, itemSpan);
 accionesDiv.appendChild(btnEditar);

 //Crear Boton de Eliminar
 const btnEliminar = document.createElement("button");
 btnEliminar.textContent = "Borrar";
 btnEliminar.onclick = () => eliminarItem(li);
 accionesDiv.appendChild(btnEliminar);
 li.appendChild(accionesDiv); 

 //Crear Boton de Categoria (esta mal)
 const btnCategoria = document.createElement("button");
 btnCategoria.textContent = "Categoria";
 btnCategoria.onclick = () => categorizarItem(li);
 accionesDiv.appendChild(btnCategoria);
 li.appendChild(accionesDiv);
 listaItems.appendChild(li);

 //limpiar Cuadro de Texto
 itemInput.value = "";


}

function eliminarItem(li) {
    listaItems.removeChild(li); 
}

function editarItem(li, itemSpan) {
    const nuevoItem = prompt("Editar Item", itemSpan.textContent);
    itemSpan.textContent = nuevoItem;
}

function categorizarItem(li) {
    const itemNombre = li.querySelector("span").textContent;

    const categoria = prompt("Ingresa una categoría para: " + itemNombre);

    if (!categoria) return;

    // Crear etiqueta de categoría si no existe
    let categoriaSpan = li.querySelector(".categoria");

 if (!categoriaSpan) {
    categoriaSpan = document.createElement("span");
    categoriaSpan.className = "categoria";
    li.insertBefore(categoriaSpan, li.children[1]);
 }

 categoriaSpan.textContent = categoria;

}
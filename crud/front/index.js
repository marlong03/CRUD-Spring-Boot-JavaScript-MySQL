//Variables Globales
const tablaProductosHTML = document.getElementById('tablaProductos')
const nombre =  document.getElementById('nombre')
const precio =  document.getElementById('precio')
const cantidad =  document.getElementById('cantidad')
const btnGuardar =  document.getElementById('btnGuardar')
let tituloModal = document.getElementById('tituloModal')
let idProductoModificar = 0
//Acciones Guardar Producto
btnGuardar.addEventListener('click',()=>{
    if(tituloModal.innerText === "Modificar Producto"){
        crearProducto(idProductoModificar)
    }
    else if(tituloModal.innerText === "Crear Producto"){
        crearProducto(0)
    }
})

//Eliminar Producto
async function eliminarProducto(id){
    await fetch('http://localhost:8080/api/producto/delete/'+id,{
        method: 'DELETE',
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        
      })
      .then((res)=>{
        console.log(res);
        alert("Producto eliminado")
        obtenerProductos()
      })
      .catch((err)=>{
        console.log(err);
        alert("Lo sentimos no pudimos eliminar el producto")
      })
}


//Modificar Producto
function modificarProducto(id){
    tituloModal.innerText = "Modificar Producto"
    modal.style.display = "block";
    idProductoModificar = id
    resetModal()
    let producto = listaProductos.filter(producto => producto.idproducto === id)
    console.log(producto[0]);
    nombre.value = producto[0].nombreproducto
    precio.value = producto[0].precioproducto
    cantidad.value = producto[0].cantidadproducto


}

//Crear Prodcuto
async function crearProducto(id){
    let productoGuardar = {
        idproducto:id,
        nombreproducto:nombre.value,
        precioproducto:parseInt(precio.value),
        cantidadproducto:parseInt(cantidad.value),
        fecha:fechaHoy()
    }
    console.log(productoGuardar);

    await fetch('http://localhost:8080/api/producto/new',{
        method: 'POST',
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productoGuardar) 
      })
      .then((producto)=>{
        console.log(producto);
        alert("Producto guardado")
        modal.style.display = "none";
        obtenerProductos()
        resetModal()
      })
      .catch((err)=>{
        console.log(err);
        alert("Lo siento no pudimos crear el producto")
      })

   

}
function fechaHoy(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

//Consumo API
let listaProductos = []
async function obtenerProductos(){
    tablaProductosHTML.innerHTML = ''
    await fetch('http://localhost:8080/api/producto')
        .then(response =>  response.json())
        .then(productos => {
            console.log(productos)
            listaProductos = productos
            for(let producto of productos){
                
                tablaProductosHTML.innerHTML +=
                '<tr>'+
                '    <th scope="row">'+producto.idproducto+'</th>'+
                '    <td>'+producto.nombreproducto+'</td>'+
                '    <td>'+producto.precioproducto+'</td>'+
                '    <td>'+producto.cantidadproducto+'</td>'+
                '    <td>'+producto.fecha+'</td>'+
                '    <td>'+
                '        <input type="button" class="btn btn-outline-danger" value="Eliminar" onclick=eliminarProducto('+producto.idproducto+')>'+
                '        <input type="button" class="btn btn-primary" value="Modificar" onclick=modificarProducto('+producto.idproducto+')>'+
                '    </td>'+
                '</tr>'
            }
            
        })
        .catch((err)=>{
            console.log(err);
            alert("Lo sentimos no pudimos obtener lo productos")
        })
}
obtenerProductos()


//Reset Modal
function resetModal(){
    nombre.value = ""
    cantidad.value = ""
    precio.value = ""
}


//Modal 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    tituloModal.innerText = "Crear Producto"
    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
  resetModal()
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetModal()
  }
}
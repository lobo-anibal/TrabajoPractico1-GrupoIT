
var id = location.search.substr(4);
//console.log(id);

const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://wolf323empresa.pythonanywhere.com/productos/" + id,
      buscar: "",
      datos: [],
      id: 0,
      nombre: "",
      imagen: "",
      precio: 0,
      stock: 0,
      descripcion:"",
    }; /*return*/
  } /*data */,
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data;
          this.id = data.id;
          this.nombre = data.nombre;
          this.imagen = data.imagen;
          this.precio = data.precio;
          this.stock = data.stock;
          this.descripcion=data.descripcion;
          console.log("Productos:", this.datos);
        });
    },
    editar(){
        let producto = {
            nombre: this.nombre,
            precio: this.precio,
            stock: this.stock,
            imagen: this.imagen,
            descripcion: this.descripcion,
        }
        var options = {
            body: JSON.stringify(producto),
            method:"PUT",
            headers:{'Content-Type': 'application/json'},
            redirect: 'follow'
        }
        fetch(this.url,options)
        .then(function() {
            alert("Registro Modificado")
            window.location.href="./productosAdmin.html";
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar")
        })
    }
    
  } /*methods*/,
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");


function redirigir() {
  window.location.href = "./productosAdmin.html";
}
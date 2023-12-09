const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://wolf323empresa.pythonanywhere.com/productos",
      buscar: "",
      datos: [],
      filtrados: [],
      id: 0,
      nombre: "",
      imagen: "",
      precio: 0,
      stock: 0,
      descripcion:""
    }; /*return*/
  } /*data */,
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data;
          this.filtrados = data;
          console.log("Productos:", this.datos);
        });
    },
    productosFiltrados() {
      if (this.buscar === "") {
        this.filtrados = this.datos;
      } else {
        this.filtrados = this.datos.filter((producto) =>
          producto.nombre.toLowerCase().includes(this.buscar.toLowerCase())
        );
      }
    },
    limpiar() {
      this.buscar = "";
      this.productosFiltrados();
    },
    eliminar(id) {
      const url = this.url + "/" + id;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) 
        .then((res) => {
          alert("Registro Eliminado");
          location.reload(); 
        });
    },
    agregar(){
      let producto = {
          nombre:this.nombre,
          precio: this.precio,
          stock: this.stock,
          imagen:this.imagen,
          descripcion:this.descripcion
      }
      var options = {
          body:JSON.stringify(producto),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow'
      }
      fetch(this.url, options)
          .then(function () {
              alert("Registro grabado")
              window.location.href = "./productosAdmin.html";
          })
          .catch(err => {
              console.error(err);
              alert("Error al Grabar") 
          })      
    },
  } /*methods*/,
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");


function redirigir() {
  window.location.href = "./productosAdmin.html";
}
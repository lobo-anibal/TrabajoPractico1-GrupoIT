const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://my-json-server.typicode.com/lobo-anibal/apis-json-archive/db",
      nombre: "andres",
      buscar: "",
      datos: [],
      filtrados: [],
    }; /*return*/
  } /*data */,
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data.productos;
          this.filtrados = data.productos;
        });
    },
    productosFiltrados() {
      if (this.buscar === "") {
        this.filtrados = this.datos;
      } 
      else {
        this.filtrados = this.datos.filter((producto) =>
          producto.nombre.toLowerCase().includes(this.buscar.toLowerCase())
        );
      }
    },
    limpiar(){
      this.buscar="";
      this.productosFiltrados();
    }
  }, /*methods*/
  created() {
    this.fetchdata(this.url);
  }, /*created*/
  
}).mount("#app");

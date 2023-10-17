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
        .then((data) => (this.datos = data.productos));
    },
    productosFiltrados() {
      if (this.buscar.length === 0) {
        this.filtrados = this.datos;
        console.log("if");
      } else {
        this.filtrados = this.datos.filter((producto) =>
          producto.nombre.toLowerCase().includes(this.buscar.toLowerCase())
        );
        console.log("Else: ");
        console.log(this.filtrados.length);
      }

      this.buscar = "";
    },
  } /*methods*/,
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");

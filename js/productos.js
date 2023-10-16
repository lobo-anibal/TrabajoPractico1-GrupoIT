const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://my-json-server.typicode.com/lobo-anibal/apis-json-archive/db",
      nombre: "andres",
      buscar: " ",
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
    mostrar() {
      alert("Funcion Mostrar");
    },
  } /*methods*/,
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");

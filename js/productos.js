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
      descripcion: "",
      pComprados:[],
      carrito:[],
      cant:0,
      uActivo:"",
    }; /*return*/
  } /*data */,
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data;
          this.filtrados = data;
          this.uActivo = sessionStorage.getItem("username");
          this.carrito = JSON.parse(sessionStorage.getItem("pComprados")) || [];
          // console.log("Productos:", this.datos);
          // console.log("usuario:", this.uActivo);
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
    agregar() {
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
        descripcion: this.descripcion,
      };
      var options = {
        body: JSON.stringify(producto),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "./productosAdmin.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar");
        });
    },
    comprar(producto) {
      const encontrar = this.pComprados.find((p) => p.id === producto.id);
      this.cant++;
      if (encontrar) {
        encontrar.cantidad++;
      } else {
        this.pComprados.push({ ...producto, cantidad: 1 });
      }
      sessionStorage.setItem('pComprados', JSON.stringify(this.pComprados));
      console.log("Productos Comprados:", this.pComprados);
      // alert("Producto Agregado al Carrito");
    },
    finalizarcompra(){
      alert("Gracias por su Compra")
    },
  } /*methods*/,
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");

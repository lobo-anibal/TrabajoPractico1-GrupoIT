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
      pComprados: [],
      carrito: [],
      cant: 0,
      uActivo: "",
      validar: "true",
      total: 0,
    }; /*return*/
  } /*data */,
  methods: {
    async fetchdata(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        this.datos = data;
        this.filtrados = data;
        this.uActivo = sessionStorage.getItem("username");
        this.validar = sessionStorage.getItem("validar");
        this.carrito = JSON.parse(sessionStorage.getItem("pComprados")) || [];
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
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
          alert("Producto Eliminado");
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
          alert("Producto Guardado");
          window.location.href = "./productosAdmin.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Guardar");
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
      sessionStorage.setItem("pComprados", JSON.stringify(this.pComprados));
      console.log("Productos Comprados:", this.pComprados);
      alert("Producto Agregado al Carrito");
    },
    finalizarcompra() {
      alert("Gracias por su Compra");
      window.location.href = "./productos.html";
    },
  } /*methods*/,
  computed: {
    totalCompra() {
      this.total = this.carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
      );
      this.total = parseFloat(this.total.toFixed(2));
      console.log("total--> ", this.total);
      return this.total;
    },
  },
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");

function redirigir() {
  window.location.href = "./productosAdmin.html";
}

function cerrarAdmin (){
  window.location.href = "./productos.html";
  sessionStorage.setItem("validar","true");
}


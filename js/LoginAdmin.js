const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://wolf323empresa.pythonanywhere.com/usuarios",
      username: "",
      password: "",
      aux: true,
    }; /*return*/
  } /*data */,
  methods: {
    fetchdata(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.datos = data;
          //console.log("Usuarios:", this.datos);
        });
    },
    login() {
      this.fetchdata(this.url);
      for (usuario of this.datos) {
        //console.log("User:",this.username,"==", usuario.nombre, "Password:",this.password,"==", usuario.password);
        if (this.username === usuario.nombre &&this.password === usuario.password) {
          this.aux = false;
          alert("Inicio de sesión exitoso");
          window.location.href = "./productosAdmin.html";
          sessionStorage.setItem("username", this.username);
        }
      }

      if (this.aux === true) {
        alert("Usuario o contraseña incorrectos");
        window.location.href = "./productos.html";
      }
    },
  } /*methods*/,
  created() {
    this.fetchdata(this.url);
  } /*created*/,
}).mount("#app");

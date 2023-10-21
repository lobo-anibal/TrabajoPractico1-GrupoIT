
  const { createApp } = Vue
        
          createApp({
            data() {
              return {
                message: 'Hello Vue!',
                nombre:"andres",
                error:false,
                frutas:["peras","manzanas","bananas"],
                imagen:"./img/img2.jpg"
              }
            }
          }).mount('#app')

        //   me falta v bind
// Encabezado de  las paginas
let encabezado = " ";

encabezado = `
<div class="menu-boot">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <img src="./img/logo2.png" alt=""> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="./index.html#inicio">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a href="./index.html#quienes-somos">Quienes Somos</a>
                            </li>
                            <li class="nav-item">
                                <a href="./index.html#Servicios">Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a href="./index.html#Asesoramiento">Asesoramientos</a>
                            </li>
                            <li class="nav-item">
                                <a href="./productos.html">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a href="./index.html#Ubicacion">Ubicacion</a>
                            </li>
                            <li class="nav-item">
                                <a href="./index.html#Contacto">Contacto</a>
                            </li>
                            <li>
                            <a href="./LoginAdmin.html"> Iniciar sesion</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


        <div>
            <section class="textos-header">
                <div>
                    <svg>
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            Isd Computacion
                        </text>
                    </svg>
                </div>
                <h1 id="inicio">Brindamos Soluciones para tu Empresa</h1>
                <h2> Soporte IT </h2>



            </section>
            <div class="wave" style="height: 150px; overflow: hidden;">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style="stroke: none; fill: #fff;">
                    </path>
                </svg>
            </div>
        </div>

`;
document.querySelector(".encabezado").innerHTML = encabezado;

// Pie de Pagina de  las paginas

let pieDePagina = " ";

pieDePagina = `
<div class="contenedor-footer">
            <div class="cont">
                <div class="content-foo">
                    <h4>Telefono</h4>
                    <p>+54 94422345</p>
                </div>
                <div class="content-foo">
                    <h4>Email</h4>
                    <p>soporteIT@kazuaki.com</p>
                </div>
                <div class="content-foo">
                    <h4>Direccion</h4>
                    <p>Nicaragua 97 - Neuquen</p>
                </div>
            </div>
        </div>
        <div>
            <h2 class="titulo-final"> GRUPO SOPORTE IT | Maximiliano Pozo - Anibal Lobo - Daniela Lopez -Juan Pavoni
            </h2>&nbsp;
        </div>
        <a href="#" class="flecha"><img src="https://cdn-icons-png.flaticon.com/512/44/44603.png" alt=""
                class="imagenflecha"></a>
                <a href="https://api.whatsapp.com/send/?phone=3834582464" target="_blank">
                    <img src="./img/logo-whats.png" alt="" class="float-logo">
                </a>
`;
document.querySelector(".pie-de-pagina").innerHTML = pieDePagina;

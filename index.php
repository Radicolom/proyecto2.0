<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </script><link rel="shortcut icon" href="vista/img/icono.png" type="image/x-icon"><title>Proyecto</title>
     
    <!-- FUENTES -->
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chewy&family=Indie+Flower&family=Josefin+Sans:wght@100&family=Shantell+Sans:wght@300&display=swap" rel="stylesheet">
    
    <!--  BOTN -->

    <!-- ICONOS -->
        
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">
  
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.13.2/js/jquery.dataTables.js"></script>

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <link rel='stylesheet' type="text/css" media="screen" href='vista/css/main.css'>

    <script src='vista/js/main.js'></script>
    <script src='vista/js/adoptaAnimal.js'></script>
    <script src='vista/js/darAdopcion.js'></script>
    <script src='vista/js/ingreso.js'></script>

 
</head>
<body>

    <nav class="navbar navbar-expand-sm fixed-top" id="imagenTitulo">
        <div class="container-fluid mb-1 text-center" >
            <div class="col" >
                    <H1>
                    <img src="vista/img/icono.png" alt="" style="width:45px;">
                    Animal welfare
                    </H1>
            </div>
                
            <div class="col">
                <div class="input-group p-1">
                    <button type="button" id="btnSelectInicio" class="btn btn-lg">Inicio</button>
                    <button type="button" id="btnSelectAdopta" class="btn btn-lg">Adopta</button>
                    <button type="button" id="btnSelectDarAdopcion" class="btn btn-lg">Dar en adopcion</button>
                    <button type="button" id="btnSelectIniciarSesion" class="btn btn-lg">Iniciar Sesion</button>
                </div>
            </div>
        </div>
    </nav>
        
    <div class="mt-5 row" id="contenedorInicio" style="display: none;">
        <div id="imagenFondoInicio">
            <div class="row p-5">
            </div>
            <div class="row p-2 mb-5">
                <div class="col-5">
                    <h3>“El mundo sería un lugar más agradable si todos tuvieran la capacidad de amar tan incondicionalmente como un perro”</h3>
                    <h4>M.K. Clinton</h4>
                </div>
            </div>
            <div class="mt-5 mb-5 container">
                <br>
                <br>
                <div class="row">
                    <div class="col sm-1">
                        <button type="button" id="btnAdoptar" class="btn-1 btn-lg">
                            <h4> 
                            🐶
                            Adoptar 🐈 </h4>
                        </button>
                    </div>
                    <div class="col sm-1">
                        <button type="button" id="btnSelectDarAdopcion2" class="btn-1 btn-lg" >
                            <h4> 
                            🦴
                            Dar en adopcion</h4>
                        </button>
                    </div>
                    <div class="col sm-10">
                    </div>
                </div>
            </div>
            <div class="row p-5">
            </div>
        </div>
        <div class="row p-5">
            <div class="col-6">
                <center>
                    <h1 id=" textoInicio">¡Hola!</h1>
                    <h3 id="textoInicio">Si estas considerando adoptar una mascota ¡te felicito por tomar esta decisión! Adoptar un animal es una de las cosas más gratificantes que puedes hacer en la vida. No solo estarás dándole un lugar amoroso a un animal necesitado, sino que también estarás mejorando tu propia vida al tener un compañero peludo y cariñoso en tu hogar</h3>
                    <h3 id="textoInicio">Así que adelante, toma la decisión de adoptar una mascota y comienza a disfrutar de todo lo que te ofrece tener un compañero animal en tu vida con animal welfare </h3>
                    <h3>Animate!</h3>
                </center>
            </div>
            <div class="col-5">
                <br>
                <center>
                    <img id="imagenLista" src="vista/img/lista.png" alt="" style="height: 350px; width: 350px;">
                </center>
            </div>
        </div>
        <div class="row p-5">
            <div class="col-5">
                <br>
                <center>
                    <img src="https://media4.giphy.com/media/J546wv1ja2LkrAwRBm/giphy.gif?cid=ecf05e47gpactdkuek8jpeopjxaoqtxr2u4l7v5zotvqq5u4&rid=giphy.gif&ct=g" alt="" style="height: 300px; width: 300px;">
                </center>
            </div>
            <div class="col-6">
                <center>
                    <h1 id=" textoInicio">Razones por las que debes adoptar un peludito</h1><br>
                    <h3 id="textoInicio">🐾 Estas salvando una vida <br></h3>
                    <h3 id="textoInicio">Amor incondicional 🐾<br></h3>
                    <h3 id="textoInicio">🐾 Te enseña sobre la responsabilidad<br></h3>
                    <h3 id="textoInicio">Dile adios a la soledad 🐾<br></h3>
                </center>
            </div>
        </div>
    </div>

    <div class="mt-5 container" id="contenedorAdopta" style="display: none;">
        <br>
        <br>
        <div class="row">
            <div class="col sm-6">
                <div class="input-group">
                    <span class="input-group-text">
                        🔍
                    </span>
                    <input type="text" list="listaBusqueda" name="browser" class="form-control" placeholder="Buscar">
                        <datalist id="listaBusqueda">
                            <!-- ARCHIVO -->
                        </datalist>
                </div>
            </div>
            <div class="col sm-4">
            </div>
            <div class="col sm-2" id="BtnEspecie">
                <center>
                <div class="btn-group" id="btnEspecieRaza">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Especie</button>
                        <div class="dropdown-menu" id="listaBusquedaAnimalEspecie">
                            <!-- ARCHIVO -->
                        </div>
                    </div>
                    <div class="btn-group" id="btnSelecRaza" style="display: none;">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Raza</button>
                        <div class="dropdown-menu" id="listaBusquedaAnimalRaza">
                            <!-- ARCHIVO -->
                        </div>
                    </div>
                </div>
                </center>
            </div>
        </div>
    
        <br>
        <br>

        <div class="row" id="adopcionListas">
            <!-- ARCHIVO -->
        </div>
    </div>

    <div class="mt-5 container" id="contenedorDarAdopcion" style="display: none;">
        <br>
        <br>
        <div class="card text-white" style="width: 400px; background-color:#b46743a1;" >
            <div class="card-body">
                <center>
                    <img id="preview" src="#" alt="Vista previa de la foto" class="rounded-circle" style="width: 170px; height: 170px; display: none; ">
                </center>
                <div class="mb-3 mt-3">
                    <label for="text" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombreAnimal" placeholder="Escriba el nombre" name="nombre">
                </div>
                <div class="mb-3 mt-3">
                    <label for="imagenAnimal" class="form-label">Foto:</label>
                    <input type="file" class="form-control" id="imagenAnimal" name="imagenAnimal" accept="image/jpeg" size="65536">
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Sexo:</label>
                            <select class="form-select"  id="selectSexo">
                                <!-- ARCHIVO -->
                            </select>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Edad:</label>
                            <select class="form-select" id="selectEdadAnimal">
                                <!-- ARCHIVO -->
                            </select>     
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Tiempo:</label>
                            <select class="form-select" id="selectTiempo">
                                <!-- ARCHIVO -->
                            </select>     
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Especie:</label>
                            <input type="text" list="listaRegistroEspecie" name="browser" class="form-control" placeholder="Escriba la especie" id="especieRegistro">
                            <datalist id="listaRegistroEspecie">
                                <!-- ARCHIVO -->
                            </datalist>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Raza:</label>
                            <input type="text" list="listaRegistroRaza" name="browser" class="form-control" placeholder="Escriba la raza" id="razaRegistro">
                            <datalist id="listaRegistroRaza">
                                <!-- ARCHIVO -->
                            </datalist>        
                        </div>
                    </div>
                </div>
                <label for="comment">Description:</label>
                <textarea class="form-control" rows="5" name="text" id="descripcionRegistrar"></textarea>
                
                <div class="form-check mb-3">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                    </label>
                </div>
                <button type="button" class="btn btn-primary" id="btnRegistrarAnimal">Registrar peludito🙈</button>
            </div>
        </div>
    </div>

    <div class="mt-5 container" id="contenedorFormulariosUsuarios" style="display: none;">
        <div class="row p-5">
            <div class="col" id="contenedorFormularioIngreso" style="margin: auto; display: none;">
                <center>
                    <h1>LOGIN</h1>
                </center>        
                <div class="card text-white" style="margin: auto; width: 400px; background-color:#b46743a1;">
                    <div class="card-body">
                        <form id="formularioIngreso">
                            <div class="mb-3 mt-3">
                                <label for="tex" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="emailIngreso" placeholder="Enter email" required>
                                <span id="errorCorreo" style="color:red; display:none;">Este campo es obligatorio.</span>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwdIngreso" placeholder="Enter password" name="pswd">
                                <span id="errorPassword" style="color:red; display:none;">Este campo es obligatorio.</span>
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                                </label>
                            </div>
                            <button type="submit" style="color:aliceblue;" class="btn">Ingresar</button>
                            <button  type="button" id="modalRegistroBtn" Style="color:aliceblue;" class="btn">registrarme</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col" id="contenedorDatosUsuario" style="margin: auto; display: none;">
                <center>
                    <h1>USUARIO</h1>
                </center>        
                <div class="card text-white" style="margin: auto; width: 400px; background-color:#b46743a1;">
                    <div class="card-body">
                        <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Nombre:</label>
                                <input type="text" class="form-control" id="nombreUsuario" placeholder="Escriba su nombre" name="nombre" disabled>
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Apellido:</label>
                                <input type="text" class="form-control" id="apellidoUsuario" placeholder="Escriba su apellido" name="nombre" disabled>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Correo:</label>
                                <input type="email" class="form-control" id="correoUsuario" placeholder="Escriba un correo" name="nombre" disabled>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Direccion:</label>
                                <input type="text" class="form-control" id="direccionUsuario" placeholder="Escriba direccion" name="nombre" disabled>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="number" class="form-label">Telefono:</label>
                                <input type="nymber" class="form-control" id="telefonoUsuario" placeholder="Escriba un numero de telefono" name="nombre" disabled>
                            </div>
                            <!-- <div class="mb-3 mt-3">
                                <label for="pasword" class="form-label">Contraseña:</label>
                                <input type="pasword" class="form-control" id="nombre" placeholder="Escriba la contraseña" name="nombre">
                            </div> -->
                            <button  type="button" id="cerrarSecionBtn" Style="color:aliceblue;" class="btn">Cerrar secion</button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <br>
                <div id="carousel" class="carousel_slide-imagen" data-bs-ride="carousel">
                   <div id="contenedorFormulariosUsuariosFotos" class="carousel-inner">
                        <!-- ARCHIVO -->
                   </div>          
                </div>          
            </div>          
            <div class="col" id="contenedorFormularioRegistro" style="display: none;">
                <center>
                    <h1>REGISTRO</h1>
                </center>
                <div class="card text-white" style="margin: auto; width: 400px; background-color:#b46743a1;" >
                    <div class="card-body">
                        <div class="mb-3 mt-3">
                            <label for="form-label" class="form-label">FOTO:</label>
                            <input class="form-control" type="file" name="imagenAnmal">
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Nombre:</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Escriba su nombre" name="nombre">
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Apellido:</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Escriba su apellido" name="nombre">
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Direccion:</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Escriba direccion" name="nombre">
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="number" class="form-label">Telefono:</label>
                            <input type="nymber" class="form-control" id="nombre" placeholder="Escriba un numero de telefono" name="nombre">
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Correo:</label>
                            <input type="email" class="form-control" id="nombre" placeholder="Escriba un correo" name="nombre">
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="pasword" class="form-label">Contraseña:</label>
                            <input type="pasword" class="form-control" id="nombre" placeholder="Escriba la contraseña" name="nombre">
                        </div>             
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
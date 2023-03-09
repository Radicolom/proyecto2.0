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

 
</head>
<body>

<br>
<br>
<br>
<br>
<br>
<br>
<!-- <img src="control/base64.php?id=1" > -->


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
        
    <div class="row" id="contenedorInicio" style="display: none;">
        <div id="imagenFondoInicio">
            <div class="row p-5">
            </div>
            <div class="row p-2">
                <div class="col-5">
                    <h3>“El mundo sería un lugar más agradable si todos tuvieran la capacidad de amar tan incondicionalmente como un perro”</h3>
                    <h4>M.K. Clinton</h4>
                </div>
            </div>
            <div class="row p-5">
            </div>
            <div class="row p-5">
            </div>
            <div class="container sm-12 sticky-top">
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
            <div class="col-6" style="background-color:#fffffd5b;">
                <h1 id="textoInicio">¡Hola!<h3>
                <h3 id="textoInicio">Si estas considerando adoptar una mascota ¡te felicito por tomar esta decisión! Adoptar un animal es una de las cosas más gratificantes que puedes hacer en la vida. No solo estarás dándole un lugar amoroso a un animal necesitado, sino que también estarás mejorando tu propia vida al tener un compañero peludo y cariñoso en tu hogar</h3>
            </div>
            <div class="col-5">
            <br>
            <center>
                <img src="https://media4.giphy.com/media/J546wv1ja2LkrAwRBm/giphy.gif?cid=ecf05e47gpactdkuek8jpeopjxaoqtxr2u4l7v5zotvqq5u4&rid=giphy.gif&ct=g" alt="" style="height: 250px; width: 250px;">
            </center>
            </div>
        </div>
    </div>

    <div class="container" id="contenedorAdopta" style="display: none;">
        <br>
        <br>
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
                <button type="button" id="ejecutar">
                    prueba
                </button>
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

    <div class="container" id="contenedorDarAdopcion" style="display: none;">
    <br>
    <br>
    <br>
        <div class="card text-white" style="width: 400px; background-color:#b46743a1;" >
            <form action="/action_page.php">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Nombre:</label>
                    <input type="email" class="form-control" id="nombre" placeholder="Escriba el nombre" name="nombre">
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
                            <input type="text" list="listaRegistroEspecie" name="browser" class="form-control" placeholder="Escriba la especie">
                            <datalist id="listaRegistroEspecie">
                                <!-- ARCHIVO -->
                            </datalist>    
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Raza:</label>
                            <input type="text" list="listaRegistroRaza" name="browser" class="form-control" placeholder="Escriba la raza">
                            <datalist id="listaRegistroRaza">
                                <!-- ARCHIVO -->
                            </datalist>        
                        </div>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" list="listaBusqueda" name="browser" class="form-control" placeholder="Buscar">
                        <datalist id="listaBusqueda">
                            <!-- ARCHIVO -->
                        </datalist>
                </div>
                <label for="comment">Description:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>

                <div class="form-check mb-3">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                    </label>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

    <div class="container" id="contenedorFormularioIngreso" style="display: none;">
        <br>
        <br>
        <div class="row p-5">
            <div class="col">
                <center>
                    <h1>LOGIN</h1>
                </center>
            <div class="card text-white" style="width: 400px; background-color:#b46743a1;" >
                    <form action="/action_page.php">
                        <div class="card-body">
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col">
            </div>          
            <div class="col">
                <center>
                    <button type="submit" class="btn btn-primary">Registrar me</button>
                </center>
                <br>
                <div class="card text-white" style="width: 400px; background-color:#b46743a1;" >
                    <form action="/action_page.php">
                        <div class="card-body">
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
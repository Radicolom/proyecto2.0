<script src='vista/js/adoptaAnimal.js'></script>

<div class="mt-5 container" id="contenedorAdopta">
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

<div class="mt-5 container" id="contenedorDatosAnimal" style="display: none;">
    <br>
    <div class="mt-5 row">
        <center>
            <h1>🐶 DATOS DEL ANIMAL 🐯</h1>
        </center>
        <br>
        <div class="col">       
            <div class="card text-white" style="width: 400px; background-color:#b46743a1;">
                <div class="card-body">
                    <center>
                        <label for="text" class="form-label">Foto:</label>
                        <br>
                        <img id="fotoAnimal" src="#" alt="Vista previa de la foto" class="rounded-circle" style="width: 170px; height: 170px;">
                    </center>
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="nombreAnimalDatos" name="nombreAnimalDatos" disabled>
                    </div>
                    <div class="row">
                        <div class="col">
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Sexo:</label>
                        <input type="text" class="form-control" id="sexoAnimalDatos" name="sexoAnimalDatos" disabled>
                    </div>
                        </div>
                        <div class="col">
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Edad:</label>
                                <input type="text" class="form-control" id="edadAnimalDatos" name="edadAnimalDatos" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Especie:</label>
                                <input type="text" class="form-control" id="especieDatos" name="especieDatos" disabled>
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3 mt-3">
                                <label for="text" class="form-label">Raza:</label>
                                <input type="text" class="form-control" id="razaDatos" placeholder="Indefinida" name="razaDatos" disabled>
                            </div>
                        </div>
                    </div>
                    <label for="comment">Descripcion:</label>
                    <textarea class="form-control" rows="5" name="descripcionDatos" id="descripcionDatos" disabled></textarea>
                </div>
            </div>
        </div>
        <div class="col">      
            <div class="card text-white" style="margin: auto; width: 400px; background-color:#b46743a1;">
                <div class="card-body">
                    <center>
                        <h1>PERSONA ENCARGADA</h1>
                    </center>  
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="nombreUsuarioDatos" placeholder="Escriba su nombre" name="nombre" disabled>
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="email" class="form-label">Correo:</label>
                        <input type="email" class="form-control" id="correoUsuarioDatos" placeholder="Escriba un correo" name="nombre" disabled>
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Direccion:</label>
                        <input type="text" class="form-control" id="direccionUsuarioDatos" placeholder="Escriba direccion" name="nombre" disabled>
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="number" class="form-label">Telefono:</label>
                        <input type="nymber" class="form-control" id="telefonoUsuarioDatos" placeholder="Escriba un numero de telefono" name="nombre" disabled>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="mt-5 container" id="contenedorFormulariosUsuarios">
    <div class="row p-5">
        <div class="col" id="contenedorFormularioIngreso">
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
        <div class="col" id="contenedorDatosUsuario">
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
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div id="contenedorFormulariosUsuariosFotos" class="carousel-inner">
                    <!-- ARCHIVO -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
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
                        <label for="text" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Escriba su nombre" name="nombre">
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Apellido:</label>
                        <input type="text" class="form-control" id="apellido" placeholder="Escriba su apellido" name="nombre">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Direccion:</label>
                        <input type="text" class="form-control" id="direccion" placeholder="Escriba su direccion" name="nombre">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="number" class="form-label">Telefono:</label>
                        <input type="nymber" class="form-control" id="telefono" placeholder="Escriba un numero de telefono" name="nombre">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Correo:</label>
                        <input type="email" class="form-control" id="correo" placeholder="Escriba un correo" name="nombre">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="text" class="form-label">Contraseña:</label>
                        <input type="password" class="form-control" id="contraseña" placeholder="Escriba la contraseña" name="nombre">
                    </div>             
                    <button type="submit" class="btn btn-primary">Registrar</button>
                </div>
            </div>
        </div>
    </div>
</div>
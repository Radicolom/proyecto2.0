$(function(){

    var tiempoRegistro = false;
    var ingress = false;
    var num = 0;
    var compararEdadAnimal = 0;

    var btnAdopta = document.getElementById("btnSelectAdopta");

    const inputEmail = document.getElementById("emailIngreso");
    const errorEmail = document.getElementById("errorCorreo");

    const inputPassword = document.getElementById("pwdIngreso");
    const errorPassword = document.getElementById("errorPassword");
    
    inputEmail.addEventListener("input", function() {
      if (inputEmail.value === "") {
        errorEmail.style.display = "inline";
      } else {
        errorEmail.style.display = "none";
      }
    });
    
    inputPassword.addEventListener("input", function() {
      if (inputPassword.value === "") {
        errorPassword.style.display = "inline";
      } else {
        errorPassword.style.display = "none";
      }
    });

    Swal.fire({
        imageUrl: 'https://media.giphy.com/media/Cdkk6wFFqisTe/giphy.gif',
        imageHeight: 250,
        imageAlt: 'Foto',
        title: 'Para dar en adopcion a tu mascota debes estar registrado',
        showDenyButton: true,
        showCloseButton: true,
        // confirmButtonColor: red,
        confirmButtonText: 'Ok 🏡',
        denyButtonText: `Registrate ya`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        } else if (result.isDenied) {
            INICIARSE_BTNS()
        }
      })

    cargarPangtalla();

    function cargarPangtalla(){
        $("#contenedorInicio").fadeIn(1000);
    }

    $("#btnSelectInicio").on("click", INICIO)

    // Dar Adopcion BTNS

    $("#btnSelectDarAdopcion").on("click", Dar_Adopcion_BTNS)
    $("#btnSelectDarAdopcion2").on("click", Dar_Adopcion_BTNS)

    // ADOPCION BTNS

    $("#btnSelectAdopta").on("click", ADOPCION_BTNS)
    $("#btnAdoptar").on("click", ADOPCION_BTNS)

    // INICIARSE BTNS

    $("#btnSelectIniciarSesion").on("click", INICIARSE_BTNS)
    $("#cerrarSecionBtn").on("click",function(){
        ingress = false
        $("#carousel").fadeIn(1000);
        INICIARSE_BTNS()
    })


    $("#modalRegistroBtn").on("click", REGISTRARSE_BTNS)

    // FORMULARIO INGRESO BTN 

    const formularioIngreso = document.getElementById("formularioIngreso");
    formularioIngreso.addEventListener("submit", validarFormularioIngreso);


    function INICIO(){
        // btnAdopta.removeAttribute("disabled");
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorInicio").fadeIn(1000);
    }

    function Dar_Adopcion_BTNS(){
        // btnAdopta.removeAttribute("disabled");
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").fadeIn(1000);
        if(ingress === false){
            Swal.fire({
               
            })
        }
    }

    function ADOPCION_BTNS(){
        // btnAdopta.setAttribute("disabled", "true");
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorAdopta").fadeIn(1000);
    }

    function INICIARSE_BTNS(){
        // btnAdopta.removeAttribute("disabled");
        if(ingress === false){
            // listarAnimal()
            $("#contenedorInicio").hide();
            $("#contenedorAdopta").hide();
            $("#contenedorDarAdopcion").hide();
            $("#contenedorFormularioRegistro").hide();
            $("#contenedorDatosUsuario").hide();
            $("#contenedorFormulariosUsuarios").fadeIn(1000);
            $("#contenedorFormularioIngreso").fadeIn(1000);
        }else{
            $("#contenedorInicio").hide();
            $("#contenedorAdopta").hide();
            $("#contenedorDarAdopcion").hide();
            $("#contenedorFormularioRegistro").hide();
            $("#contenedorFormulariosUsuarios").fadeIn(1000);
        }
    }

    function REGISTRARSE_BTNS(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorFormularioRegistro").fadeIn(1000);
    }

    // TIEMPO REGISTRO

    $("#selectTiempo").on("change", function(){
        listarEdadAnimal();
    })

    $("#modalRegistroBtn").on("click", function(){
        listarAnimal()
    })

    // FORMULARIOS



    function validarFormularioIngreso(){
        event.preventDefault();
            
        var correo = $("#emailIngreso").val();
        var password = $("#pwdIngreso").val();

        var objData =new FormData();
        objData.append("correoIngreso",correo);
        objData.append("passwordIngreso",password);
        $.ajax({
            url: "control/animalControl.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(respuesta){

            if (respuesta == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o contaseña incorrectos',
                    showConfirmButton: false,
                    timer: 2000
                })
                return false; // Evita que el formulario se envíe
            }else{
                ingress = true;
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                  
                Toast.fire({
                icon: 'success',
                title: 'Ha iniciado sesión correctamente'
                })

                $("#contenedorFormularioIngreso").hide();
                $("#carousel").hide();
                $("#contenedorDatosUsuario").fadeIn(1000);    
                respuesta.forEach(listaAnimal);

                function listaAnimal(item, index) {
                    $("#nombreUsuario").val(item.nombre);
                    $("#apellidoUsuario").val(item.apellido);
                    $("#correoUsuario").val(item.correo);
                    $("#direccionUsuario").val(item.direccion);
                    $("#telefonoUsuario").val(item.tell);
                }
            }

        })
        return true;
    }

    listarAnimal();

    function listarAnimal(){

        document.getElementById("adopcionListas").innerHTML = "";
        document.getElementById("contenedorFormulariosUsuariosFotos").innerHTML = "";

        var objData =new FormData();
        objData.append("listarAnimal","ok");
        $.ajax({
            url: "control/animalControl.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(respuesta){

            respuesta.forEach(listaAnimal);

            function listaAnimal(item, index) {
                num += 1;
                const listaAnimal = document.getElementById("adopcionListas");
                const FotosFormulario = document.getElementById("contenedorFormulariosUsuariosFotos");
                FotosFormulario.innerHTML +=
                '<div class="carousel-item active"><img style="width: 100px; height: 300px; margin: auto;" src="data:image/jpg;base64,' +
                item.imagen +
                '" alt="Mi foto" class=" d-block w-100 rounded-circle img-thumbnail"></div>';
                if (num == 6) {
                listaAnimal.innerHTML += '<div class="row p-3"></div>';
                num = 1;
                }

                listaAnimal.innerHTML +=
                '<div class="col"><button id="btnAnimal" type="button" class="btn" idEspecie="'+ item.idAnimal +'"><div class="card" style="width: 200px; background-color:#ffc273;"><br><img style="width: 170px; height: 170px; margin: auto;" src="data:image/jpg;base64,' +
                item.imagen +
                '" alt="Mi foto" ><div class="card-body"><h4 class="card-title">NOMBRE:</h4><h4 class="card-title">' +
                item.nombre +
                '</h4><h5>ESPECIE:</h5><h5 class="card-text">' +
                item.especie +
                '</h5></div></div></button></div>';
                // <h5 class="card-text">SEXO:</h5><h5 class="card-text">;' +
                // item.sexo +
                // '</h5><h5 class="card-text">EDAD:</h5><h5 class="card-text">' +
                // item.numero +
                // " " +
                // item.tiempo +
                // '</h5><a href="#" class="btn btn-primary">See Profile</a></div></div></div>';
            }
        })
    }

    // TIEMPO

    listarTiempo();

    function listarTiempo(){
        document.getElementById("selectTiempo").innerHTML = "";

        const busquedaTiempo = document.getElementById('selectTiempo');
        busquedaTiempo.innerHTML += `<option value="0" disabled>Seleccione cantidad de tiempo</option>`;
                    
        var objData =new FormData();

        objData.append("listarTiempo","ok");
        $.ajax({
        url: "control/animalControl.php",
        type: "post",
        dataType: "json",
        data: objData,
        cache: false,
        contentType: false,
        processData: false
      }).done(function(respuesta){
  
          console.log(respuesta)

          respuesta.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){
  
                busquedaTiempo.innerHTML += `<option value="${item.IdTiempo}">${item.nombreTiempo}</option>`;

            }
    
            listarEdadAnimal();

        })
    }


    function listarEdadAnimal(){
        var edad = 0;
        compararEdadAnimal = $("#selectTiempo").val();

        document.getElementById("selectEdadAnimal").innerHTML = "";
                    
        var objData =new FormData();
        
        if(compararEdadAnimal == 3){
            edad = 21;
            objData.append("listarEdadAnimalMenos",edad);
            
        }else{
            if(compararEdadAnimal == 2){
                edad = 13;
                objData.append("listarEdadAnimalMenos",edad);
            }else{
                objData.append("listarEdadAnimal","ok");   
            }
        }
        $.ajax({
        url: "control/animalControl.php",
        type: "post",
        dataType: "json",
        data: objData,
        cache: false,
        contentType: false,
        processData: false
      }).done(function(respuesta){
  
          console.log(respuesta)

          respuesta.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){
  
                busquedaTiempo = document.getElementById('selectEdadAnimal');    
                busquedaTiempo.innerHTML += `<option value="${item.idNumero}">${item.numero}</option>`;

            } 
        })
    }

    // SEXO

    listarSexo();

    function listarSexo(){
        document.getElementById("selectSexo").innerHTML = "";

        const busquedaSex = document.getElementById('selectSexo');
        busquedaSex.innerHTML += `<option value="0" disabled>Seleccione el Sexo</option>`;
                    
        var objData =new FormData();

        objData.append("listarSexo","ok");
        $.ajax({
        url: "control/animalControl.php",
        type: "post",
        dataType: "json",
        data: objData,
        cache: false,
        contentType: false,
        processData: false
        }).done(function(respuesta){
    
            console.log(respuesta)

            respuesta.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){
    
                busquedaSex.innerHTML += `<option value="${item.idSexo}">${item.nombreSexo}</option>`;

            }
        })
    } 

    // ESPECIE

    listarBusquedaAnimal();

    function listarBusquedaAnimal(){
        // BUSQUEDA
        document.getElementById("listaBusqueda").innerHTML = "";
        document.getElementById("listaBusquedaAnimalEspecie").innerHTML = "";

        // REGISTRO DATOS ANIMAL
        document.getElementById("listaRegistroEspecie").innerHTML = "";
        document.getElementById("listaRegistroRaza").innerHTML = "";

        
        var objData =new FormData();
      
        objData.append("listarBusquedaAnimal","ok");
        $.ajax({
        url: "control/animalControl.php",
        type: "post",
        dataType: "json",
        data: objData,
        cache: false,
        contentType: false,
        processData: false
      }).done(function(respuesta){
        //   var dataSet = [];
  
            console.log(respuesta)

            var BusquedaFiltro = respuesta.filter(item => item.nombreEspecie !== null);
            var registroFiltro = respuesta.filter(item => item.nombreRaza !== null);

            BusquedaFiltro.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){

                // BUSQUEDA ANIMAL
                const busquedaEs = document.getElementById('listaBusqueda');
                busquedaEs.innerHTML += `<option value="${item.nombreEspecie}">`;

                const busquedaSelec = document.getElementById('listaBusquedaAnimalEspecie');
                busquedaSelec.innerHTML += `<a class="dropdown-item" id="selecCionarBusquedaEspecie" value="${item.idEspecie}">${item.nombreEspecie}</a>`;

                // REGISTRO DATOS ANIMAL
                
                const datosEspecieAnimal = document.getElementById('listaRegistroEspecie');
                datosEspecieAnimal.innerHTML += `<option value="${item.nombreEspecie}">`;

            } 

            registroFiltro.forEach(listarRegistross);

            function listarRegistross(item,index){

                // BUSQUEDA ANIMAL
                const busquedaSelec = document.getElementById('listaBusquedaAnimalRaza');
                busquedaSelec.innerHTML += `<a class="dropdown-item" id="seleccionarBusquedaRaza" value="${item.idRaza}">${item.nombreRaza}</a>`;

                // REGISTRO DATOS ANIMAL  
                const datosRazaAnimal = document.getElementById('listaRegistroRaza');
                datosRazaAnimal.innerHTML += `<option value="${item.nombreRaza}">`;      
            } 

        })
    }

    // COMANDOS
    
    $("#listaBusquedaAnimalEspecie").on("click", "#selecCionarBusquedaEspecie", function(){
        $("#btnSelecRaza").fadeIn(1000);
       
        var val = $(this).attr("value");
        console.log(val);
        alert(val);

        //   if(item.IdTiempo == 1){
        //             tiempoRegistro = true;
        //         }else{
        //             tiempoRegistro = false;
        //         }
    })

    $("#listaBusquedaAnimalRaza").on("click", "#seleccionarBusquedaRaza", function(){
        $("#btnSelecRaza").fadeIn(1000);
       
        var val = $(this).attr("value");
        console.log(val);
        alert(val);

        //   if(item.IdTiempo == 1){
        //             tiempoRegistro = true;
        //         }else{
        //             tiempoRegistro = false;
        //         }
    })

    $("#adopcionListas").on("click",'#btnAnimal', function(){
        var correo = $(this).attr("idEspecie");
        alert(correo);
    })


})
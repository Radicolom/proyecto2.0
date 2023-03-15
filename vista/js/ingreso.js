$(function(){  
  
    var ingress = false;
    fotosAnimal();
    
    $("#cerrarSecionBtn").on("click",function(){
        ingress = false
        alert(ingress)
        $("#btnRegistrarAnimal").val("0")
        $("#carousel").fadeIn(1000);
        INICIARSE_BTNS()
    })

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
    
    $("#modalRegistroBtn").on("click", REGISTRARSE_BTNS)  
    $("#btnSelectIniciarSesion").on("click", INICIARSE_BTNS)
    
    $("#cerrarSecionBtn").on("click",function(){
        ingress = false
        $("#carousel").fadeIn(1000);
        INICIARSE_BTNS()
    })

    function INICIARSE_BTNS(){
        if(ingress === false){
            $("#contenedorDatosUsuario").hide();
            $("#contenedorFormulariosUsuarios").fadeIn(1000);
            $("#contenedorFormularioIngreso").fadeIn(1000);
        }else{
            $("#contenedorFormulariosUsuarios").fadeIn(1000);
        }
        $("#contenedorInicio").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorFormularioRegistro").hide();
        $("#contenedorDatosAnimal").hide();
        $("#contenedorDatosDarAdopcionAnimal").hide();
    }

    function REGISTRARSE_BTNS(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorFormularioRegistro").fadeIn(1000);
    }
    
    const formularioIngreso = document.getElementById("formularioIngreso");
    formularioIngreso.addEventListener("submit", validarFormularioIngreso);

    function validarFormularioIngreso(){
        event.preventDefault();
            
        var correo = $("#emailIngreso").val();
        var password = $("#pwdIngreso").val();
        var objData =new FormData();
        objData.append("correoIngreso",correo);
        objData.append("passwordIngreso",password);
        $.ajax({
            url: "control/inicioControl.php",
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

                    $("#btnRegistrarAnimal").val(item.idUsuario)
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

    function fotosAnimal(){

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
            var cont = 0;
            respuesta.forEach(listaAnimal);
            function listaAnimal(item, index) {     
                         
                const FotosFormulario = document.getElementById("contenedorFormulariosUsuariosFotos");

                if(cont<1){
                    cont ++ ;
                    FotosFormulario.innerHTML +=
                    '<div class="carousel-item active"><img style="width: 100px; height: 300px; margin: auto;" src="data:image/jpg;base64,' +
                    item.imagen +
                    '" alt="' + item.nombre + '" class="d-block w-100 rounded-circle img-thumbnail"></div>';
                }else{
                    FotosFormulario.innerHTML +=
                    '<div class="carousel-item"><img style="width: 100px; height: 300px; margin: auto;" src="data:image/jpg;base64,' +
                    item.imagen +
                    '" alt="' + item.nombre + '" class="d-block w-100 rounded-circle img-thumbnail"></div>';
                }
                
            }
        })
    }


    
        //     if(ingress === false){
        //         Swal.fire({
        //             title: 'Para dar en adopcion a tu mascota debes estar registrado',
        //             allowOutsideClick: false,
        //             allowEscapeKey: false,
        //             confirmButtonColor: "#5c340bb6",
        //             confirmButtonText: 'Ok 🏡'
        //         }).then((result) => {
        //             if (result.isConfirmed) {
        //                 INICIARSE_BTNS();
        //             }
        //         })
        //     }

    // ALERTA DARADOPCION

    // $("#btnSelectDarAdopcion").on("click", spam_Dar_Adopcion_BTNS)
    // $("#btnSelectDarAdopcion2").on("click", spam_Dar_Adopcion_BTNS)

    // function spam_Dar_Adopcion_BTNS(){
    //     if(ingress === false){
    //         Swal.fire({
    //             title: 'Para dar en adopcion a tu mascota debes estar registrado',
    //             allowOutsideClick: false,
    //             allowEscapeKey: false,
    //             confirmButtonColor: "#5c340bb6",
    //             confirmButtonText: 'Ok 🏡'
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 INICIARSE_BTNS();
    //             }
    //         })
    //     }
    // }
})
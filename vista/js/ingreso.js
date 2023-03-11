$(function(){

    var ingress = false;

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
  
    $("#cerrarSecionBtn").on("click",function(){
        ingress = false
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

    // ALERTA DARADOPCION

    $("#btnSelectDarAdopcion").on("click", spam_Dar_Adopcion_BTNS)
    $("#btnSelectDarAdopcion2").on("click", spam_Dar_Adopcion_BTNS)

    function spam_Dar_Adopcion_BTNS(){
        if(ingress === false){
            Swal.fire({
               
            })
        }
    }
})
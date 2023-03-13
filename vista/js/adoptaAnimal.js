$(function(){

    $("#btnSelectAdopta").on("click", ADOPCION_BTNS)
    $("#btnAdoptar").on("click", ADOPCION_BTNS)

    function ADOPCION_BTNS(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorDatosAnimal").hide();
        $("#contenedorDatosDarAdopcionAnimal").hide();
        $("#contenedorAdopta").fadeIn(1000);
    }

    listarAnimal();

    function listarAnimal(){

        document.getElementById("adopcionListas").innerHTML = "";
        document.getElementById("contenedorFormulariosUsuariosFotos").innerHTML = "";
        document.getElementById("darAdopcionListas").innerHTML = "";

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

            var idValidacion = $("#btnRegistrarAnimal").val();
            var comparar = "";

            respuesta.forEach(compararacion);

            function compararacion(item, index){
                comparar = item.animal_Id_Usuario;
            }

            respuesta.forEach(listaAnimal);

            function listaAnimal(item, index) {
                                
                const listaAnimal = document.getElementById("adopcionListas");
                const FotosFormulario = document.getElementById("contenedorFormulariosUsuariosFotos");
                const FotosDarAdopcion = document.getElementById("darAdopcionListas");

                if(idValidacion == comparar){
                    FotosDarAdopcion.innerHTML +=
                    '<div class="col"><button id="btnDarAnimal" type="button" class="btn" idEspecie=' + item.idAnimal + 
                    ' imagenAnimal='+ item.imagen + 
                    ' nombreAnimal=' + item.nombreAnimal + 
                    ' sexoAnimal=' + item.sexo + 
                    ' edadAnimal="' + item.numero + 
                    ' tipoEdad=' + item.tiempo + 
                    '" especie="' + item.especie + 
                    '" raza="' + item.raza + 
                    '" descripcion="' + item.descripcion + 
                    '><div class="card" style="width: 150px; background-color:#ffc273;"><br><img style="width: 100px; height: 100px; margin: auto;" src="data:image/jpg;base64,' +
                    item.imagen +
                    '" alt="Mi foto"><div class="card-body"><h4 class="card-title">NOMBRE:</h4><h4 class="card-title">' +
                    item.nombreAnimal +
                    '</h4></div></div></button></div>';
                }

                FotosFormulario.innerHTML +=
                '<div class="carousel-item active"><img style="width: 100px; height: 300px; margin: auto;" src="data:image/jpg;base64,' +
                item.imagen +
                '" alt="Mi foto" class=" d-block w-100 rounded-circle img-thumbnail"></div>';

                listaAnimal.innerHTML +=
                '<div class="col"><button id="btnAnimal" type="button" class="btn" idEspecie=' + item.idAnimal + 
                ' imagenAnimal='+ item.imagen + 
                ' nombreAnimal=' + item.nombreAnimal + 
                ' sexoAnimal=' + item.sexo + 
                ' edadAnimal="' + item.numero + ' ' + item.tiempo + 
                '" especie="' + item.especie + 
                '" raza="' + item.raza + 
                '" descripcion="' + item.descripcion + 
                '" nombreUsuario="' + item.nombre + ' ' + item.apellido + 
                '" correo=' + item.correo +
                ' tell=' + item.tell + 
                ' direccion=' + item.direccion + 
                '><div class="card" style="width: 200px; background-color:#ffc273;"><br><img style="width: 170px; height: 170px; margin: auto;" src="data:image/jpg;base64,' +
                item.imagen +
                '" alt="Mi foto"><div class="card-body"><h4 class="card-title">NOMBRE:</h4><h4 class="card-title">' +
                item.nombreAnimal +
                '</h4><h5>ESPECIE:</h5><h5 class="card-text">' +
                item.especie +
                '</h5></div></div></button></div>';


            }
        })
    }

    
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

        var imagenBase64 = $(this).attr("imagenAnimal");
        var imagenSrc = "data:image/png;base64," + imagenBase64;
        $("#fotoAnimal").attr("src", imagenSrc);
        
        var nombreUsuarioDatos = $(this).attr("nombreUsuario");
        var correoDatos = $(this).attr("correo");
        var tellDatos = $(this).attr("tell");
        var direccionDatos = $(this).attr("direccion");
        var nombreAnimalDatos = $(this).attr("nombreAnimal");
        var sexoAnimalDatos = $(this).attr("sexoAnimal");
        var edadAnimalDatos = $(this).attr("edadAnimal");
        var especieDatos = $(this).attr("especie");
        var razaDatos = $(this).attr("raza");
        var descripcionDatos = $(this).attr("descripcion");

        $("#contenedorAdopta").hide();
        $("#contenedorDatosAnimal").fadeIn(1000);

        $("#nombreAnimalDatos").val(nombreAnimalDatos);
        $("#sexoAnimalDatos").val(sexoAnimalDatos);
        $("#edadAnimalDatos").val(edadAnimalDatos);
        $("#especieDatos").val(especieDatos);
        $("#razaDatos").val(razaDatos);
        $("#descripcionDatos").val(descripcionDatos);

        $("#nombreUsuarioDatos").val(nombreUsuarioDatos);
        $("#correoUsuarioDatos").val(correoDatos);
        $("#direccionUsuarioDatos").val(direccionDatos);
        $("#telefonoUsuarioDatos").val(tellDatos);

    })  

    //GUARDAR DATOS ANIMAL

    
       

    window.listarAnimal = listarAnimal;

})
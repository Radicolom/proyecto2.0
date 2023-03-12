$(function(){

    var imagenAnimal; 

    $("#btnSelectDarAdopcion").on("click", Dar_Adopcion_BTNS)
    $("#btnSelectDarAdopcion2").on("click", Dar_Adopcion_BTNS)

    $("#selectTiempo").on("change", function(){
        listarEdadAnimal();
    })

    function Dar_Adopcion_BTNS(){
        listarTiempo();
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").fadeIn(1000);
    }
    
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
  
          respuesta.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){
  
                busquedaTiempo.innerHTML += `<option value="${item.IdTiempo}">${item.nombreTiempo}</option>`;

            }
    
            listarEdadAnimal();

        })
    }

    function listarEdadAnimal(){
        var edad = 0;
        var compararEdadAnimal = $("#selectTiempo").val();

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

        respuesta.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){

                busquedaTiempo = document.getElementById('selectEdadAnimal');    
                busquedaTiempo.innerHTML += `<option value="${item.idNumero}">${item.numero}</option>`;

            } 
        })
    }

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

    //GUARDAR DATOS ANIMAL
    
    $(document).ready(function() {
        $('#imagenAnimal').on('change', function() {
            imagenAnimal = this.files[0];
          
            if (imagenAnimal.type !== "image/jpeg") {
                Swal.fire({
                    icon: 'warning',
                    title: 'El formato de la imagen debe ser JPEG.',
                    showConfirmButton: false,
                    timer: 2500
                })
                $("#imagenAnimal").val("");
                return;
            }else{
                if (imagenAnimal.size > 65535) { 
                    Swal.fire({
                        icon: 'warning',
                        title: 'El archivo seleccionado es demasiado grande, debe ser menor a 65 KB.',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    $("#imagenAnimal").val("");
                    return;
                }else{
                    var urlImagen = URL.createObjectURL(imagenAnimal);
                    $('#preview').attr('src', urlImagen).show();
                }
            }
        });
      });

    $("#btnRegistrarAnimal").on("click", function(){        
        guardarAnimal();
    })

    function guardarAnimal(){

        var nombreRegistro = $("#nombreAnimal").val();
        var imagenAnimalRegistro = $("#imagenAnimal")[0].files[0];
        var sexoRegistro = $("#selectSexo").val();
        var edadRegistro = $("#selectEdadAnimal").val();
        var tiempoRegistro = $("#selectTiempo").val();
        var especieRegistro = $("#especieRegistro").val();
        var razaRegistro = $("#razaRegistro").val();
        var descripcionRegistro = $("#descripcionRegistrar").val();
    
        var objData =new FormData();
        objData.append("nombreAnimal",nombreRegistro);
        objData.append("imagenAnimal",imagenAnimalRegistro);
        objData.append("SexoAnimal",sexoRegistro);
        objData.append("EdadAnimal",edadRegistro);
        objData.append("selectTiempo",tiempoRegistro);
        objData.append("especieRegistro",especieRegistro);
        objData.append("razaRegistro",razaRegistro);
        objData.append("descripcionRegistro",descripcionRegistro);
        $.ajax({
            url: "control/animalControl.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(respuesta){

            if (respuesta !== "ok") {
                console.log(respuesta);
            } else {

            $("#nombreAnimal").val("");
            $("#imagenAnimal").val("")
            $("#selectSexo").val("");
            $("#selectEdadAnimal").val("");
            $("#selectTiempo").val("");
            $("#especieRegistro").val("");
            $("#razaRegistro").val("");
            $("#descripcionRegistrar").val("");
            
            listarAnimal();

            Toast.fire({
            icon: 'success',
            title: 'Ha iniciado sesión correctamente'
            })

        //     $("#contenedorFormularioIngreso").hide();
        //     $("#carousel").hide();
        //     $("#contenedorDatosUsuario").fadeIn(1000);    
        //     respuesta.forEach(listaAnimal);

        //     function listaAnimal(item, index) {
        //         $("#nombreUsuario").val(item.nombre);
        //         $("#apellidoUsuario").val(item.apellido);
        //         $("#correoUsuario").val(item.correo);
        //         $("#direccionUsuario").val(item.direccion);
        //         $("#telefonoUsuario").val(item.tell);
            }
        })
    }
    
})
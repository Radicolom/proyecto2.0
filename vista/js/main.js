$(function(){

    var tiempoRegistro = false;
    var num = 0;
    var compararEdadAnimal = 0;

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

    $("#modalRegistroBtn").on("click", REGISTRARSE_BTNS)

    function INICIO(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorInicio").fadeIn(1000);
    }

    function Dar_Adopcion_BTNS(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").fadeIn(1000);  
    }

    function ADOPCION_BTNS(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorAdopta").fadeIn(1000);
        listarAnimal();
    }

    function INICIARSE_BTNS(){
        $("#contenedorInicio").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorFormularioRegistro").hide();
        $("#contenedorFormulariosUsuarios").fadeIn(1000);
        $("#contenedorFormularioIngreso").fadeIn(1000);
        
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

    function listarAnimal(){

        document.getElementById("adopcionListas").innerHTML = "";

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

            console.log(respuesta);

            respuesta.forEach(listaAnimal);

            function listaAnimal(item, index) {
                num += 1;
                const listaAnimal = document.getElementById("adopcionListas");

                if (num == 6) {
                listaAnimal.innerHTML += '<div class="row p-3"></div>';
                num = 1;
                }

                listaAnimal.innerHTML +=
                '<div class="col"><div class="card" style="width: 200px;"><img src="data:image/jpg;base64,' +
                item.imagen +
                '" alt="Mi foto"><div class="card-body"><h4 class="card-title">NOMBRE:</h4><h4 class="card-title">' +
                item.nombre +
                '</h4><h5>ESPECIE:</h5><h5 class="card-text">' +
                item.especie +
                '</h5><h5 class="card-text">SEXO:</h5><h5 class="card-text">' +
                item.sexo +
                '</h5><h5 class="card-text">EDAD:</h5><h5 class="card-text">' +
                item.numero +
                " " +
                item.tiempo +
                '</h5><a href="#" class="btn btn-primary">See Profile</a></div></div></div>';
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
            edad = 25;
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


})
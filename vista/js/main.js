$(function(){

    var tiempoRegistro = false;
    var inicio = false;
    var num = 0;
    var compararEdadAnimal = 0;

    cargarPangtalla();

    function cargarPangtalla(){
        $("#contenedorInicio").fadeIn(1000);
    }

    $("#btnSelectInicio").on("click", function(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorInicio").fadeIn(1000);
    })

    // Dar Adopcion BTNS

    $("#btnSelectDarAdopcion").on("click", function(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").fadeIn(1000);
    })

    
    $("#btnSelectDarAdopcion2").on("click", function(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").fadeIn(1000);
    })

    // ADOPCION BTNS

    $("#btnSelectAdopta").on("click", function(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorAdopta").fadeIn(1000);
        listarAnimal();
    })

    $("#btnAdoptar").on("click", function(){
        $("#contenedorFormularioIngreso").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorAdopta").fadeIn(1000);
    })

    // INICIO BTNS

    $("#btnSelectIniciarSesion").on("click", function(){
        $("#contenedorInicio").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorFormularioIngreso").fadeIn(1000);
    })

    // TIEMPO REGISTRO

    $("#selectTiempo").on("change", function(){
        listarEdadAnimal();
    })



    $("#ejecutar").on("click", function(){
        
        // document.getElementById("adopcionListas").innerHTML = "";

        num += 1;

        const categoriasBuscador = document.getElementById('adopcionListas');

        
        // categoriasBuscador.innerHTML +=     '<div class="row" id="adopcionListas">'
    if(num == 6){
        categoriasBuscador.innerHTML += '<div class="row p-3"></div>'
        num = 1;
    }
        categoriasBuscador.innerHTML += '<div class="col"><div class="card" style="width: 200px;"><img src="vista/img/icono.png" class="img-thumbnail" alt="Cinque Terre" style="width: 250px;"><div class="card-body"><h4 class="card-title">John Doe</h4><p class="card-text">Some example text.</p><a href="#" class="btn btn-primary">See Profile</a></div></div></div>'

        // categoriasBuscador.innerHTML += '</div>'                
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
  
          console.log(respuesta)

          respuesta.forEach(listaAnimal);

            function listaAnimal(item,index){
  
                num += 1;
                const listaAnimal = document.getElementById('adopcionListas');
                

                if(num == 6){
                    listaAnimal.innerHTML += '<div class="row p-3"></div>'
                    num = 1;
                    }
                    listaAnimal.innerHTML += '<div class="col"><div class="card" style="width: 200px;"><img src="vista/img/icono.png" class="img-thumbnail" alt="Cinque Terre" style="width: 250px;"><div class="card-body"><h4 class="card-title">NOMBRE:</h4><h4 class="card-title">' + item.nombreAnima + '</h4><p class="card-text">ESPECIE:</p><p class="card-text">' + item.nombreEspecie + '</p><p class="card-text">SEXO:</p><p class="card-text">' + item.nombreSexo + '</p><p class="card-text">EDAD:</p><p class="card-text">' + item.numero + ' ' + item.nombreTiempo + '</p><a href="#" class="btn btn-primary">See Profile</a></div></div></div>';
            
                
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
  
                // busquedaTiempo = document.getElementById('selectTiempo');    
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
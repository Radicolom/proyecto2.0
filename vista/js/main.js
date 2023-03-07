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

    $("#selectTiempo").on("click", function(){
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
        
        if(compararEdadAnimal == 1){
            objData.append("listarEdadAnimal","ok");   
        }else{
            if(compararEdadAnimal == 2){
                edad = 13;
                objData.append("listarEdadAnimal",edad);
            }else{
                edad = 25;
                objData.append("listarEdadAnimal",edad);
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

    

    // ESPECIE

    listarBusquedaAnimal();

    function listarBusquedaAnimal(){
        document.getElementById("listaBusqueda").innerHTML = "";
        document.getElementById("listaBusquedaAnimal").innerHTML = "";
        
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

          respuesta.forEach(ListarBusqueda);

            function ListarBusqueda(item,index){
  
                // alert(item.nombreEspecie)
                const busquedaEs = document.getElementById('listaBusqueda');
                busquedaEs.innerHTML += `<option value="${item.nombreEspecie}">`;
                // idEspecie="${item.idEspecie}"
                const busquedaSelec = document.getElementById('listaBusquedaAnimal');
                busquedaSelec.innerHTML += `<a class="dropdown-item" id="seleccionarBusqueda" value="${item.idEspecie}">${item.nombreEspecie}</a>`;

            } 
        })
    }

    $("#listaBusquedaAnimal").on("click", "#seleccionarBusqueda", function(){
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
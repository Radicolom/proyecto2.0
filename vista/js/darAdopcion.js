$(function(){

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
  
          console.log(respuesta)

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

})
$(function(){

    $("#btnRegistrarAnimal").on("click", function(){
        listarAnimal()
    })

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
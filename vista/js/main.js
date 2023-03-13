$(function(){

    var tiempoRegistro = false;

    cargarPangtalla();

    function cargarPangtalla(){
        $("#contenedorInicio").fadeIn(1000);
    }

    $("#btnSelectInicio").on("click", INICIO)

    function INICIO(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorDatosAnimal").hide();
        $("#contenedorDatosDarAdopcionAnimal").hide();
        $("#contenedorInicio").fadeIn(1000);
    }
 
})
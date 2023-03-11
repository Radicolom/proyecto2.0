$(function(){

    var tiempoRegistro = false;
    var num = 0;

    cargarPangtalla();

    function cargarPangtalla(){
        $("#contenedorInicio").fadeIn(1000);
    }

    $("#btnSelectInicio").on("click", INICIO)

    function INICIO(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorInicio").fadeIn(1000);
    }
 
})
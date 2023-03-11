$(function(){

    var tiempoRegistro = false;
    var num = 0;

    cargarPangtalla();

    function cargarPangtalla(){
        $("#contenedorInicio").fadeIn(1000);
    }

    $("#btnSelectInicio").on("click", INICIO)

    // ADOPCION BTNS

    $("#btnSelectAdopta").on("click", ADOPCION_BTNS)
    $("#btnAdoptar").on("click", ADOPCION_BTNS)

    function INICIO(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorAdopta").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorInicio").fadeIn(1000);
    }

    function ADOPCION_BTNS(){
        $("#contenedorFormulariosUsuarios").hide();
        $("#contenedorInicio").hide();
        $("#contenedorDarAdopcion").hide();
        $("#contenedorAdopta").fadeIn(1000);
    }


})
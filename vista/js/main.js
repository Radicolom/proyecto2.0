$(function(){

    verificarInicio();

    function verificarInicio(){         
        var objData =new FormData();
        objData.append("verificarIni","ok");
        $.ajax({
        url: "control/inicioControl.php",
        type: "post",
        dataType: "json",
        data: objData,
        cache: false,
        contentType: false,
        processData: false
        }).done(function(respuesta){
            if(respuesta !== true){
                $("#btnSelectSalir1").hide();
                $("#btnSelectIniciarSesion").fadeIn(1);   
            }else{
                $("#btnSelectIniciarSesion").hide();
                $("#btnSelectSalir1").fadeIn(1); 
            }
        })
    }

    $("#btnSelectSalir1").on("click", usuario_Salir)

    function usuario_Salir(){
        var objData =new FormData();
        objData.append("usuarioSalir", "ok");
        $.ajax({
            url: "control/inicioControl.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(respuesta){
            if(respuesta === "ok"){
                window.location.href = "inicio";
            }
        })
    }
})
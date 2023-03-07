<?php
include_once "../modelo/animalControlModelo.php";

class ctrAnimal{

    public function listarBusquedaAnimal(){
        $objRespuesta=mdlAnimal::mdlListarBusquedaAnimal();
        echo json_encode($objRespuesta);
    }

}

if(isset($_POST["listarBusquedaAnimal"]) == "ok"){
    $objProducto = new ctrAnimal();
    $objProducto->listarBusquedaAnimal();
}



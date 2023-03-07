<?php
include_once "../modelo/animalControlModelo.php";

class ctrAnimal{

    public function listarBusquedaAnimal(){
        $objRespuesta=mdlAnimal::mdlListarBusquedaAnimal();
        echo json_encode($objRespuesta);
    }

}

if(isset($_POST["listarBusquedaAnimal"]) == "ok"){
    $objAnimal = new ctrAnimal();
    $objAnimal->listarBusquedaAnimal();
}

class ctrTiempoAnimal{

    public function listarTiempoAnimal(){
        $objRespuesta=mdlTiempoAnimal::mdlTiempoAnimal();
        echo json_encode($objRespuesta);
    }

    public function listarEdadAnimal(){
        $objRespuesta=mdlTiempoAnimal::mdlListarEdadAnimal();
        echo json_encode($objRespuesta);
    }

    public function listarEdadAnimalMenos(){
        $objRespuesta=mdlTiempoAnimal::mdlListarEdadAnimalMenos($this->listarEdadAnimal);
        echo json_encode($objRespuesta);
    }

}

if(isset($_POST["listarTiempo"]) == "ok"){
    $objAnimal = new ctrTiempoAnimal();
    $objAnimal->listarTiempoAnimal();
}

if(isset($_POST["listarEdadAnimal"]) == "ok"){
    $objAnimal = new ctrTiempoAnimal();
    $objAnimal->listarEdadAnimal();
}

if(isset($_POST["listarEdadAnimal"]) != "ok"){
    $objAnimal = new ctrTiempoAnimal();
    $objAnimal->listarEdadAnimal = $_POST["listarEdadAnimal"];
    $objAnimal->listarEdadAnimalMenos();
}
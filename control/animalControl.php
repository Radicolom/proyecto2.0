<?php
include_once "../modelo/animalControlModelo.php";

class ctrListarAnimal{


    public function ListarAnimal(){
        $objRespuesta=mdlListarAnimal::mdlListarAnimal();
        $respuesta = array();

        foreach ($objRespuesta as $animal) {
            // Convertir la imagen a base64
            $imagen = base64_encode($animal['imagenAnimal']);
            // Agregar la imagen y los demás datos a la respuesta
            $respuesta[] = array(
                'imagen' => $imagen,
                'nombre' => $animal['nombreAnimal'],
                'especie' => $animal['nombreEspecie'],
                'raza' => $animal['nombreRaza'],
                'numero' => $animal['numero'],
                'tiempo' => $animal['nombreTiempo'],
                'sexo' => $animal['nombreSexo']
            );
        }
        // Enviar la respuesta al frontend en formato JSON
        echo json_encode($respuesta);
    }

}

if(isset($_POST["listarAnimal"]) == "ok"){
    $objAnimal = new ctrListarAnimal();
    $objAnimal->ListarAnimal();
}

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

class ctrDatosAnimal{

    public function listarSexo(){
        $objRespuesta=mdlDatosAnimal::mdlSexoAnimal();
        echo json_encode($objRespuesta);
    }

    public function listarTiempo(){
        $objRespuesta=mdlDatosAnimal::mdlTiempoAnimal();
        echo json_encode($objRespuesta);
    }

    public function listarEdadAnimal(){
        $objRespuesta=mdlDatosAnimal::mdlListarEdadAnimal();
        echo json_encode($objRespuesta);
    }

    public function listarEdadAnimalMenos(){
        $objRespuesta=mdlDatosAnimal::mdlListarEdadAnimalMenos($this->listarEdadAnimal);
        echo json_encode($objRespuesta);
    }

}

if(isset($_POST["listarTiempo"]) == "ok"){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->listarTiempo();
}

if(isset($_POST["listarEdadAnimal"]) == "ok"){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->listarEdadAnimal();
}

if(isset($_POST["listarEdadAnimalMenos"])){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->listarEdadAnimal = $_POST["listarEdadAnimalMenos"];
    $objAnimal->listarEdadAnimalMenos();
}

if(isset($_POST["listarSexo"]) == "ok"){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->listarSexo();
}

?>

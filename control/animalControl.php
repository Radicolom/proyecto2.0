<?php
include_once "../modelo/animalControlModelo.php";

session_start();
$comparar = $_SESSION["iniciadoSesion"];

class ctrAnimal{

    public $objRespuesta;

    public function ctrListarBusquedaAnimal(){
        $objRespuesta=mdlAnimal::mdlListarBusquedaAnimal();
        echo json_encode($objRespuesta);
    }

    public function ctrListarAnimal(){
        $objRespuesta=mdlAnimal::mdlListarAnimal();
        $respuesta = array();

        foreach ($objRespuesta as $animal) {
            $imagen = base64_encode($animal['imagenAnimal']);
            $respuesta[] = array(
                'imagen' => $imagen,
                'idAnimal' => $animal['idAnimal'],
                'nombreAnimal' => $animal['nombreAnimal'],
                'descripcion' => $animal['descripcion'],
                'especie' => $animal['nombreEspecie'],
                'raza' => $animal['nombreRaza'],
                'numero' => $animal['numero'],
                'tiempo' => $animal['nombreTiempo'],
                'sexo' => $animal['nombreSexo'],
                'animal_Id_Usuario' => $animal['animal_Id_Usuario'],
                'nombre' => $animal['nombre'],
                'apellido' => $animal['apellido'],
                'correo' => $animal['correo'],
                'tell' => $animal['tell'],
                'direccion' => $animal['direccion']  
            );
        }
        echo json_encode($respuesta);
    }
}

if(isset($_POST["listarBusquedaAnimal"]) && $_POST["listarBusquedaAnimal"] == "ok"){
$objAnimal = new ctrAnimal();
$objAnimal->ctrListarBusquedaAnimal();
}

if(isset($_POST["listarAnimal"]) && $_POST["listarAnimal"] == "ok"){
    $objAnimal = new ctrAnimal();
    $objAnimal->ctrListarAnimal();
}


class ctrDatosAnimal{

    public $objRespuesta;

    public function ctrListarSexo(){
        $objRespuesta=mdlDatosAnimal::mdlSexoAnimal();
        echo json_encode($objRespuesta);
    }

    public function ctrListarTiempo(){
        $objRespuesta=mdlDatosAnimal::mdlTiempoAnimal();
        echo json_encode($objRespuesta);
    }

    public function ctrListarEdadAnimal(){
        $objRespuesta=mdlDatosAnimal::mdlListarEdadAnimal();
        echo json_encode($objRespuesta);
    }

    public function ctrListarEdadAnimalMenos(){
        $objRespuesta=mdlDatosAnimal::mdlListarEdadAnimalMenos($this->listarEdadAnimal);
        echo json_encode($objRespuesta);
    }

}

if(isset($_POST["listarTiempo"]) && $_POST["listarTiempo"] == "ok"){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->ctrListarTiempo();
}

if(isset($_POST["listarEdadAnimal"]) && $_POST["listarEdadAnimal"] == "ok"){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->ctrListarEdadAnimal();
}

if(isset($_POST["listarEdadAnimalMenos"])){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->listarEdadAnimal = $_POST["listarEdadAnimalMenos"];
    $objAnimal->ctrListarEdadAnimalMenos();
}

if(isset($_POST["listarSexo"]) == "ok"){
    $objAnimal = new ctrDatosAnimal();
    $objAnimal->ctrListarSexo();
}

class ctrGuardarDatosAnimal{

    public $objRespuesta;

    public function ctrGuardarAnimal(){
        $objRespuesta=mdlGuardarAnimal::mdlGuardarAnimal($this->animalIdUsuario,$this->nombreAnimal, $this->imagenAnimal, $this->SexoAnimal, $this->EdadAnimal, $this->selectTiempo, $this->especieRegistro, $this->razaRegistro, $this->descripcionRegistro);
        echo json_encode($objRespuesta);
    }

    public function listarAnimalUpp(){
        if($_SESSION["iniciadoSesion"] !== false){
            $objRespuesta=mdlAnimal::mdlListarAnimal();
            $respuesta = array();
            foreach ($objRespuesta as $animal) {
                if ($animal['animal_Id_Usuario'] == $_SESSION["usuarioCom"]) {
                    $imagen = base64_encode($animal['imagenAnimal']);
                    $respuesta[] = array(
                        'imagen' => $imagen,
                        'idAnimal' => $animal['idAnimal'],
                        'nombreAnimal' => $animal['nombreAnimal'],
                        'descripcion' => $animal['descripcion'],
                        'especie' => $animal['nombreEspecie'],
                        'raza' => $animal['nombreRaza'],
                        'numero' => $animal['numero'],
                        'tiempo' => $animal['nombreTiempo'],
                        'sexo' => $animal['nombreSexo'],
                        'animal_Id_Usuario' => $animal['animal_Id_Usuario'],
                        'nombre' => $animal['nombre'],
                        'apellido' => $animal['apellido'],
                        'correo' => $animal['correo'],
                        'tell' => $animal['tell'],
                        'direccion' => $animal['direccion']  
                    );
                }

            }
            echo json_encode($respuesta);
        }
    }
}

if(isset($_POST["listarAnimalUpp"]) && $_POST["listarAnimalUpp"] == "ok"){
    $objAnimal = new ctrGuardarDatosAnimal();
    $objAnimal->listarAnimalUpp();
}

if(isset($_POST["idPertenese"],$_POST["nombreAnimal"],$_FILES["imagenAnimal"],$_POST["SexoAnimal"],$_POST["EdadAnimal"],$_POST["selectTiempo"],$_POST["especieRegistro"],$_POST["razaRegistro"],$_POST["descripcionRegistro"])){
$objRespuesta = new ctrGuardarDatosAnimal();
$objRespuesta->animalIdUsuario = $_POST["idPertenese"];
$objRespuesta->nombreAnimal = $_POST["nombreAnimal"];
$objRespuesta->imagenAnimal = file_get_contents($_FILES["imagenAnimal"]['tmp_name']);
$objRespuesta->SexoAnimal = $_POST["SexoAnimal"];
$objRespuesta->EdadAnimal = $_POST["EdadAnimal"];
$objRespuesta->selectTiempo = $_POST["selectTiempo"];
$objRespuesta->especieRegistro = $_POST["especieRegistro"];
$objRespuesta->razaRegistro = $_POST["razaRegistro"];
$objRespuesta->descripcionRegistro = $_POST["descripcionRegistro"];
$objRespuesta->ctrGuardarAnimal();
}

?>

<?php

include_once "../modelo/animalControlModelo.php";

session_start();
$iniciadoSesion = false;
$usuarioCom;

class ctrUsuario{
    public $objRespuesta;

    public function ctrValidarUsuario(){
        $objRespuesta = mdlUsuario::mdlValidarUsuario($this->correoUsuario,$this->passwordUsuario);
        if($objRespuesta){
            $_SESSION["iniciadoSesion"] = true;
            foreach ($objRespuesta as $respuesta) {
                $_SESSION["usuarioCom"] = $respuesta['idUsuario'];
                break; // detener el bucle después de encontrar el primer idUsuario
            }
        }
        echo json_encode($objRespuesta);
    }

    public function ctrCerrar(){
        $_SESSION["iniciadoSesion"] = false;
        echo json_encode("ok");
    }

}

if(isset($_POST["correoIngreso"],$_POST["passwordIngreso"])){
    $objUsuario = new ctrUsuario();
    $objUsuario->correoUsuario = $_POST["correoIngreso"];
    $objUsuario->passwordUsuario = $_POST["passwordIngreso"];
    $objUsuario->ctrValidarUsuario();
}

if(isset($_POST["usuarioSalir"]) && $_POST["usuarioSalir"] == "ok"){
    $objUsuario = new ctrUsuario();
    $objUsuario->ctrCerrar();
}


class ctrValidar{

    public $objRespuesta;

    public function ctrInicio(){
        $objRespuesta = $_SESSION["iniciadoSesion"];
        echo json_encode($objRespuesta);
    }
}

if(isset($_POST["verificarIni"]) && $_POST["verificarIni"] == "ok"){
    $objAnimal = new ctrValidar();
    $objAnimal->ctrInicio();
}

// header("Location: animalControl.php")

?>
<?php
include_once "../modelo/conexion.php";

class mdlAnimal{

    public static function mdlListarBusquedaAnimal(){
        $ListarEspecie="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM especie");
        $objRespuesta->execute();
        $ListarEspecie = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $ListarEspecie = $e;
        }
    return $ListarEspecie;
    }
    
}

class ctrTiempoAnimal{

    public static function listarTiempoAnimal(){
        $listarTiempo="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM tiempo");
        $objRespuesta->execute();
        $listarTiempo = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $listarTiempo = $e;
        }
    return $listarTiempo;
    }
    
}

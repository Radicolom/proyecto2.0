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

class mdlTiempoAnimal{

    public static function mdlTiempoAnimal(){
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
    
    public static function mdlListarEdadAnimal(){
        $listarTiempo="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM numeros");
        $objRespuesta->execute();
        $listarTiempo = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $listarTiempo = $e;
        }
    return $listarTiempo;
    }

    public static function mdlListarEdadAnimalAño($listarEdadAnimal){
        $listarTiempo="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM numeros WHERE :listarEdadAnimal>numero");
        $objRespuesta->bindparam(":listarEdadAnimal",$listarEdadAnimal);
        $objRespuesta->execute();
        $listarTiempo = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $objRespuesta = $e;
        }
    return $objRespuesta;
    }
}

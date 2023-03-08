<?php
include_once "../modelo/conexion.php";

// $objRespuesta=conexion::conectar()->prepare("SELECT DISTINCT * FROM raza UNION SELECT * FROM especie");

class mdlAnimal{

    public static function mdlListarBusquedaAnimal(){
        $ListarEspecie="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT idRaza AS idRaza, nombreRaza AS nombreRaza, NULL AS idEspecie, NULL AS nombreEspecie FROM raza
                                                    UNION 
                                                    SELECT NULL AS idRaza, NULL AS nombreRaza, idEspecie AS idEspecie, nombreEspecie AS nombreEspecie FROM especie;");
        $objRespuesta->execute();
        $ListarEspecie = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $ListarEspecie = $e;
        }
    return $ListarEspecie;
    }
    
}

class mdlDatosAnimal{

    public static function mdlSexoAnimal(){
        $listarSexo="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM sexo");
        $objRespuesta->execute();
        $listarSexo = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $listarSexo = $e;
        }
    return $listarSexo;
    }

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

    public static function mdlListarEdadAnimalMenos($listarEdadAnimal){
        $listarTiempo="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM numeros WHERE numeros.numero < :listarEdadAnimal");
        $objRespuesta->bindparam(":listarEdadAnimal",$listarEdadAnimal);
        $objRespuesta->execute();
        $listarTiempo = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $listarTiempo = $e;
        }
    return $listarTiempo;
    }
}

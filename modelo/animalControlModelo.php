<?php
include_once "../modelo/conexion.php";

// $objRespuesta=conexion::conectar()->prepare("SELECT DISTINCT * FROM raza UNION SELECT * FROM especie");
// INSERT INTO `usua` (`idUsuario`, `nombre`, `apellido`, `direccion`, `tell`, `animal_Id_Usuario`) VALUES (NULL, 'prueva', '1', 'cualquiera', '45465', '1');

class mdlListarAnimal{

    public static function mdlListarAnimal(){
        $ListarAnimal="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM animal, usua, raza, especie, tiempo, numeros, sexo WHERE animal_Id_Usuario = idAnimal AND sexo_Id_sexAnimal = idSexo AND especie_Id_Animal = idEspecie AND raza_Id_Animal = idRaza AND edad_Id_Animal = idNumero AND tipoFecha_Id_Animal = IdTiempo");
        $objRespuesta->execute();
        $ListarAnimal = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $ListarAnimal = $e;
        }
    return $ListarAnimal;
    }
    
}

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

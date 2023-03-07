<?php
include_once "../modelo/conexion.php";

class mdlAnimal{

    public static function mdlListarBusquedaAnimal(){
        $ListarProducto="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM especie");
        $objRespuesta->execute();
        $ListarProducto = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $ListarProducto = $e;
        }
    return $ListarProducto;
    }
    
}

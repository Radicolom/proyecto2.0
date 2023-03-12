<?php
include_once "../modelo/conexion.php";

// $objRespuesta=conexion::conectar()->prepare("SELECT DISTINCT * FROM raza UNION SELECT * FROM especie");
// INSERT INTO `usua` (`idUsuario`, `nombre`, `apellido`, `direccion`, `tell`, `animal_Id_Usuario`) VALUES (NULL, 'prueva', '1', 'cualquiera', '45465', '1');

class mdlUsuario{

    public static function mdlValidarUsuario($correoUsuario,$passwordUsuario){
        $validar="";
        try{
        $objRespuesta=conexion::conectar()->prepare("SELECT * FROM usua WHERE correo = :correoUsuario AND contraseña = :passwordUsuario");
        $objRespuesta->bindparam(":correoUsuario",$correoUsuario);
        $objRespuesta->bindparam(":passwordUsuario",$passwordUsuario);
        $objRespuesta->execute();
        $validar = $objRespuesta->fetchAll();
        $objRespuesta = null;
    
        }catch(Exception $e){
            $validar = $e;
        }
    return $validar;
    }
}


// ANIMAL

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

    public static function mdlListarAnimal(){
        $ListarAnimal=[];
        try{
            $objConexion = conexion::conectar();
            $objRespuesta = $objConexion->prepare("SELECT animal.idAnimal, animal.imagenAnimal, animal.nombreAnimal, especie.nombreEspecie, raza.nombreRaza, 
            numeros.numero, tiempo.nombreTiempo, sexo.nombreSexo 
            FROM animal 
            INNER JOIN usua 
            INNER JOIN sexo ON animal.sexo_Id_sexAnimal = sexo.idSexo 
            INNER JOIN especie ON animal.especie_Id_Animal = especie.idEspecie 
            INNER JOIN raza ON animal.raza = raza.idRaza 
            INNER JOIN numeros ON animal.edad_Id_Animal = numeros.idNumero 
            INNER JOIN tiempo ON animal.tipoFecha_Id_Animal = tiempo. IdTiempo");
            $objRespuesta->execute();
            $ListarAnimal = $objRespuesta->fetchAll(PDO::FETCH_ASSOC);
            $objRespuesta = null;
            
        }catch(Exception $e){
            $ListarAnimal = $e;
        }
    return $ListarAnimal;
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

class mdlGuardarAnimal{

    
    public static function mdlGuardarAnimal($nombreAnimal, $imagenAnimal, $SexoAnimal, $EdadAnimal, $selectTiempo, $especieRegistro, $razaRegistro, $descripcionRegistro){
        $guardarAnimal="";

        try{
            $objRespuesta=conexion::conectar()->prepare("INSERT INTO raza (nombreRaza) SELECT :razaRegistro 
            WHERE NOT EXISTS (SELECT nombreRaza FROM raza WHERE LOWER(nombreRaza) = LOWER(:razaRegistro) AND nombreRaza REGEXP '^[^0-9]*$') AND :razaRegistro IS NOT NULL");
            $objRespuesta->bindparam(":razaRegistro",$razaRegistro);
            $objRespuesta->execute();
            $guardarAnimal = $objRespuesta->fetchAll();
            $objRespuesta = null;
    
            }catch(Exception $e){
                $guardarAnimal = $e;
                return $guardarAnimal;
            }
        
        try{
            $objRespuesta=conexion::conectar()->prepare("INSERT INTO especie (nombreEspecie) SELECT :especieRegistro 
            WHERE NOT EXISTS (SELECT nombreEspecie FROM especie WHERE LOWER(nombreEspecie) = LOWER(:especieRegistro) AND nombreEspecie REGEXP '^[^0-9]*$') AND :especieRegistro IS NOT NULL");
            $objRespuesta->bindparam(":especieRegistro",$especieRegistro);
            $objRespuesta->execute();
            $guardarAnimal = $objRespuesta->fetchAll();
            $objRespuesta = null;
        
            }catch(Exception $e){
                $guardarAnimal = $e;
                return $guardarAnimal;
            }
            
        try{
            $objRespuesta=conexion::conectar()->prepare("INSERT INTO animal (imagenAnimal, nombreAnimal, descripcion, especie_Id_Animal, raza, edad_Id_Animal, tipoFecha_Id_Animal, sexo_Id_sexAnimal)
            SELECT :imagenAnimal, :nombreAnimal, :descripcionRegistro, e.idEspecie, r.idRaza, :EdadAnimal, :selectTiempo, :SexoAnimal
            FROM especie e
            JOIN raza r ON r.nombreRaza = LOWER(:razaRegistro)
            WHERE e.nombreEspecie = LOWER(:especieRegistro)");
            $objRespuesta->bindparam(":nombreAnimal",$nombreAnimal);
            $objRespuesta->bindparam(":imagenAnimal",$imagenAnimal, PDO::PARAM_LOB);
            $objRespuesta->bindparam(":SexoAnimal",$SexoAnimal);
            $objRespuesta->bindparam(":EdadAnimal",$EdadAnimal);
            $objRespuesta->bindparam(":selectTiempo",$selectTiempo);
            $objRespuesta->bindparam(":especieRegistro",$especieRegistro);
            $objRespuesta->bindparam(":razaRegistro",$razaRegistro);
            $objRespuesta->bindparam(":descripcionRegistro",$descripcionRegistro);

            if ($objRespuesta->execute()){
                $mensaje= "ok";

            }else{
                $mensaje= "erro al registrar datos";
            }

        }catch(Exception $e){
            $mensaje = $e;
        }
    return $mensaje;
    }
}


// $objRespuesta = $objConexion->prepare("SELECT animal.idAnimal, animal.imagenAnimal, animal.nombreAnimal, especie.nombreEspecie, raza.nombreRaza, 
//             numeros.numero, tiempo.nombreTiempo, sexo.nombreSexo 
//             FROM animal 
//             INNER JOIN usua
//             INNER JOIN sexo ON animal.sexo_Id_sexAnimal = sexo.idSexo 
//             INNER JOIN especie ON animal.especie_Id_Animal = especie.idEspecie 
//             INNER JOIN raza ON animal.raza = raza.idRaza 
//             INNER JOIN numeros ON animal.edad_Id_Animal = numeros.idNumero 
//             INNER JOIN tiempo ON animal.tipoFecha_Id_Animal = tiempo. IdTiempo");

?>
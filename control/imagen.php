<?php
// Conexión a la base de datos

$nombreServidor = "localhost";
$usuario = "root";
$baseDatos = "proyecto";
$password = "";

$mysqli = new mysqli($nombreServidor, $usuario, $password, $baseDatos);
 
// Verifica si hay errores en la conexión
if ($mysqli->connect_errno) {
    echo "Error de conexión: " . $mysqli->connect_error;
    exit();
}

// Obtiene el ID de la imagen del parámetro GET
$id = $_GET['id'];

// Realiza una consulta SQL para recuperar la imagen
$sql = "SELECT imagenAniamal FROM animal WHERE idAnimal = $id";
$resultado = $mysqli->query($sql);

// Verifica si la consulta SQL tuvo éxito
if ($resultado) {
    // Obtiene la imagen de la fila resultante
    $fila = $resultado->fetch_assoc();
    $imagen = $fila['imagenAniamal'];

    // Envía el encabezado correcto de la imagen
    header("Content-type: image/jpeg");

    // Envía la imagen como datos binarios
    echo $imagen;
} else {
    echo "Error al recuperar la imagen: " . $mysqli->error;
}

// Cierra la conexión con la base de datos
$mysqli->close();
?>

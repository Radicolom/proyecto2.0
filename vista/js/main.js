$(function(){

    Swal.fire({
        imageUrl: 'https://media.giphy.com/media/Cdkk6wFFqisTe/giphy.gif',
        imageHeight: 250,
        imageAlt: 'Foto',
        title: 'Para dar en adopcion a tu mascota debes estar registrado',
        showDenyButton: true,
        showCloseButton: true,
        // confirmButtonColor: red,
        confirmButtonText: 'Ok 🏡',
        denyButtonText: `Registrate ya`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        } else if (result.isDenied) {
            window.location.href = "iniciarSes";
        }
    })
 
})
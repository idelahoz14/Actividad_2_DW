const registroForm = document.getElementById('registration-form');
registroForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const nombre = registroForm.querySelector('[name="nombre"]').value;
    const apellido = registroForm.querySelector('[name="apellido"]').value;
    const correo = registroForm.querySelector('[name="correo"]').value;
    const contrasena = registroForm.querySelector('[name="contrasena"]').value;
    const identificacion = registroForm.querySelector('[name="identificacion"]').value;

    if (nombre === '' || apellido === '' || correo === '' || contrasena === '' || identificacion === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Recuerde digitar todos los campos!',
        })
    } else {
        
        const usuario = {
            nombre,
            apellido,
            correo,
            contrasena,
            identificacion
        };
        
        const usuariosRegistradosJSON = localStorage.getItem('usuariosRegistrados');
        let usuariosRegistrados = [];

        if (usuariosRegistradosJSON) {
            try {
                
                usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
            } catch (error) {
                console.error('Error al parsear los datos del Local Storage:', error);
            }
        }

        
        if (!Array.isArray(usuariosRegistrados)) {
            usuariosRegistrados = [];
        }
        
        usuariosRegistrados.push(usuario);

        
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
        
        registroForm.reset();

        Swal.fire({
            title: 'Muy bien!',
            text: 'Registro Guardado Exitosamente!',
            icon: 'success',
        });

        setTimeout(() => {
            window.location.href = 'tabla.html';
        }, 2000);
    }
});

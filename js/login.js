document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores de usuario y contraseña
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validar el formulario
        if (username !== "" && password !== "") {
            window.location.href = 'pages/home.html';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos!',
            })
        }
    });
});
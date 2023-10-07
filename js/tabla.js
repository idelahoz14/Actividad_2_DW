// Obtiene la tabla en la página de tabla.html
const tabla = document.querySelector('.user-table tbody');

// Obtiene los datos de usuarios registrados del Local Storage
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

// Recorre la lista de usuarios registrados y agrega cada uno a la tabla
usuariosRegistrados.forEach(usuario => {
    const row = tabla.insertRow();
    row.innerHTML = `
        <td class="user-name">${usuario.nombre}</td>
        <td class="user-lastname">${usuario.apellido}</td>
        <td class="user-email">${usuario.correo}</td>
        <td class="user-password">${usuario.contrasena}</td>
        <td class="user-identification">${usuario.identificacion}</td>
    `;
});

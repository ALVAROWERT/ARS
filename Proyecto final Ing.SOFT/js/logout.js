document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');
  
    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        // Verificar si el botón está siendo detectado correctamente
        console.log("Botón de cerrar sesión presionado");
  
        // Eliminar cualquier dato de sesión del usuario en localStorage
        localStorage.removeItem('usuarioLogueado'); // Ajusta la clave según tu implementación
  
        // Verificar que los datos se hayan eliminado
        console.log("Datos de sesión eliminados", localStorage.getItem('usuarioLogueado'));
  
        // Redirigir al usuario a la página de login
        window.location.href = 'html/login.html';
      });
    } else {
      console.log("No se encontró el botón de cerrar sesión.");
    }
  });
  
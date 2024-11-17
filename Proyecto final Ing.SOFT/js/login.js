document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar recargar la página

  // Capturar los datos del formulario
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validar campos vacíos
  if (!username || !password) {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Obtener los usuarios registrados del LocalStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Buscar al usuario en el LocalStorage
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Usuario encontrado
    alert(`¡Bienvenido, ${user.fullname}!`);
    // Redirigir a la página principal (dashboard)
    window.location.href = '/index.html';
  } else {
    // Credenciales incorrectas
    alert('Usuario o contraseña incorrectos');
  }
  
});







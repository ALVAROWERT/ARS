document.getElementById('register-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar recargar la página

  // Capturar los datos del formulario
  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Validaciones básicas
  if (!fullname || !email || !username || !password || !confirmPassword) {
    alert('Todos los campos son obligatorios');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Verificar si el usuario ya existe
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === username || user.email === email);

  if (userExists) {
    alert('El usuario o correo ya está registrado');
    return;
  }

  // Crear un nuevo usuario
  const newUser = {
    fullname,
    email,
    username,
    password // NOTA: En una aplicación real, nunca almacenes contraseñas en texto plano
  };

  // Guardar en LocalStorage
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
  window.location.href = 'login.html'; // Redirigir al login
});

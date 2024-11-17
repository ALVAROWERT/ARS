document.getElementById('afiliado-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const cedula = document.getElementById('cedula').value;
  const correo = document.getElementById('correo').value;

  // Crear un objeto con los datos del afiliado
  const afiliado = {
    nombre,
    apellidos,
    cedula,
    correo
  };

  // Obtener los datos actuales de los afiliados en LocalStorage (si existen)
  let afiliados = JSON.parse(localStorage.getItem('afiliados')) || [];

  // Agregar el nuevo afiliado al array
  afiliados.push(afiliado);

  // Guardar el array actualizado en LocalStorage
  localStorage.setItem('afiliados', JSON.stringify(afiliados));

  // Limpiar el formulario
  document.getElementById('afiliado-form').reset();
});

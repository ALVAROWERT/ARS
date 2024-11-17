document.getElementById('poliza-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const idAfiliado = document.getElementById('id-afiliado').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fechaCreacion = document.getElementById('fecha-creacion').value;

  // Crear un objeto con los datos de la póliza
  const poliza = {
    idAfiliado,
    nombre,
    apellido,
    fechaCreacion,
  };

  // Obtener las pólizas existentes de LocalStorage (si existen)
  let polizas = JSON.parse(localStorage.getItem('polizas')) || [];

  // Agregar la nueva póliza al array
  polizas.push(poliza);

  // Guardar el array actualizado en LocalStorage
  localStorage.setItem('polizas', JSON.stringify(polizas));

  // Limpiar el formulario
  document.getElementById('poliza-form').reset();

  // Mostrar mensaje de éxito
  alert("¡Póliza registrada exitosamente!");
});

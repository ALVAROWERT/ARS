document.getElementById('reclamacion-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const idAfiliado = document.getElementById('id-afiliado').value;
  const poliza = document.getElementById('poliza').value;
  const edad = document.getElementById('edad').value;
  const sexo = document.getElementById('sexo').value;
  const servicio = document.getElementById('servicio').value;
  const precio = document.getElementById('precio').value;
  const cobertura = document.getElementById('cobertura').value;
  const centroMedico = document.getElementById('centro-medico').value;

  // Crear un objeto con los datos de la reclamación
  const reclamacion = {
    idAfiliado,
    poliza,
    edad,
    sexo,
    servicio,
    precio,
    cobertura,
    centroMedico,
  };

  // Obtener las reclamaciones existentes de LocalStorage (si existen)
  let reclamaciones = JSON.parse(localStorage.getItem('reclamaciones')) || [];

  // Agregar la nueva reclamación al array
  reclamaciones.push(reclamacion);

  // Guardar el array actualizado en LocalStorage
  localStorage.setItem('reclamaciones', JSON.stringify(reclamaciones));

  // Limpiar el formulario
  document.getElementById('reclamacion-form').reset();

  // Mostrar mensaje de éxito
  alert("¡Reclamación registrada exitosamente!");
});

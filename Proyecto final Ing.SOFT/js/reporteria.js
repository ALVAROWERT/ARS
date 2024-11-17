document.getElementById('reporteria-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const reporteSeleccionado = document.getElementById('reporte-seleccion').value;
  const reporteContenido = document.getElementById('reporte-contenido');
  const reporteDatos = document.getElementById('reporte-datos');

  let datosReporte = '';

  // Obtener los datos de LocalStorage según el tipo de reporte
  if (reporteSeleccionado === 'afiliados') {
    // Cargar datos de afiliados desde LocalStorage
    const afiliados = JSON.parse(localStorage.getItem('afiliados')) || [];

    // Generar la tabla con los afiliados
    if (afiliados.length > 0) {
      datosReporte = `
        <table>
          <tr><th>Nombre</th><th>Apellidos</th><th>Cédula</th><th>Correo</th></tr>
      `;
      afiliados.forEach(afiliado => {
        datosReporte += `
          <tr>
            <td>${afiliado.nombre}</td>
            <td>${afiliado.apellidos}</td>
            <td>${afiliado.cedula}</td>
            <td>${afiliado.correo}</td>
          </tr>
        `;
      });
      datosReporte += `</table>`;
    } else {
      datosReporte = '<p>No hay afiliados registrados.</p>';
    }
  } else if (reporteSeleccionado === 'polizas') {
    // Cargar datos de pólizas desde LocalStorage
    const polizas = JSON.parse(localStorage.getItem('polizas')) || [];

    // Generar la tabla con las pólizas
    if (polizas.length > 0) {
      datosReporte = `
        <table>
          <tr><th>ID Afiliado</th><th>Nombre</th><th>Apellido</th><th>Fecha de Creación</th></tr>
      `;
      polizas.forEach(poliza => {
        datosReporte += `
          <tr>
            <td>${poliza.idAfiliado}</td>
            <td>${poliza.nombre}</td>
            <td>${poliza.apellido}</td>
            <td>${poliza.fechaCreacion}</td>
          </tr>
        `;
      });
      datosReporte += `</table>`;
    } else {
      datosReporte = '<p>No hay pólizas registradas.</p>';
    }
  } else if (reporteSeleccionado === 'reclamaciones') {
    // Cargar datos de reclamaciones desde LocalStorage
    const reclamaciones = JSON.parse(localStorage.getItem('reclamaciones')) || [];

    // Generar la tabla con las reclamaciones
    if (reclamaciones.length > 0) {
      datosReporte = `
        <table>
          <tr><th>ID Afiliado</th><th>Póliza</th><th>Edad</th><th>Sexo</th><th>Servicio</th><th>Precio</th><th>Cobertura</th><th>Centro Médico</th></tr>
      `;
      reclamaciones.forEach(reclamacion => {
        datosReporte += `
          <tr>
            <td>${reclamacion.idAfiliado}</td>
            <td>${reclamacion.poliza}</td>
            <td>${reclamacion.edad}</td>
            <td>${reclamacion.sexo}</td>
            <td>${reclamacion.servicio}</td>
            <td>${reclamacion.precio}</td>
            <td>${reclamacion.cobertura}</td>
            <td>${reclamacion.centroMedico}</td>
          </tr>
        `;
      });
      datosReporte += `</table>`;
    } else {
      datosReporte = '<p>No hay reclamaciones registradas.</p>';
    }
  }

  // Mostrar el reporte generado
  reporteDatos.innerHTML = datosReporte;
  reporteContenido.style.display = 'block';
});

const changeNavOption = (element) => {
  let idNav = element.getAttribute('data-nav');
  let allSections = document.getElementsByTagName("section");

  for (const [key, htmlElement] of Object.entries(allSections)) {
    htmlElement.classList.add("hidden");
  }

  document.getElementById(idNav).classList.remove("hidden");

  let allNavs = document.getElementsByClassName("nav-link");

  for (const [key, htmlElement] of Object.entries(allNavs)) {
    htmlElement.classList.remove("active");
  }

  element.classList.add("active");
}

//Ejecutamos automaticamente esta funcion para obtener la informacion que vamos a pintar en la tabla del coordinador de cobros
const fetchJSONData = async () => {

  fetch('https://api.npoint.io/420e169e1483ddbdbec0')//pagina donde se guarda la informacion de prueba
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
      let bodyHtml = '';
      // Aquí puedes trabajar con los datos JSON
      for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        bodyHtml += `
          <tr>
            <td scope="row">${value.nombre}</td>
            <td>${value.apellido}</td>
            <td>${value.email}</td>
            <td>${value.asesora}</td>
            <td>${value.telefono}</td>
            <td>${value.supervisor}</td>
            <td>${value.barrio}</td>
            <td>${value.direccion}</td>
            <td>${value.valor_prestamo}</td>
            <td>${value.num_cuotas}</td>
            <td>${value.estado}</td>
          </tr>
        `;
      }

      document.getElementById('body_coord').innerHTML = bodyHtml;

    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));//en caso de error se ejecuta esto
}
fetchJSONData(); //se llama la funcion automaticamente
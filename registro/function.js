//Funcion para validar la seleccion del rol y mostrar la informacion adicional de un usuario u otro
const verInfoAdicional = (element) => {
  //Obtenemos el valor del select
  let valor = element.value;

  //comparamos el valor, si es de asesora mostramos el DIV con id informacion adicional asesora y ocultamos el otro
  if (valor == "asesora") {
    document.getElementById("informacion_adicional_supervisor").setAttribute("hidden", true);
    document.getElementById("informacion_adicional_asesora").removeAttribute("hidden");
    return;
  }

  //comparamos el valor, si es de supervisor mostramos el DIV con id infomracion adicional supervisores y ocultamos el otro
  if (valor == "supervisor") {
    document.getElementById("informacion_adicional_asesora").setAttribute("hidden", true);
    document.getElementById("informacion_adicional_supervisor").removeAttribute("hidden");
    return;
  }

}

//Funcion para capturar y enviar la informacion del forumlario de registro
const registrarse = () => {
  //objeto que contiene toda la informacion del formulario de registro
  const obj = {
    nombres: document.querySelector("#nombresRegistro").value,
    apellidos: document.querySelector("#apellidosRegistro").value,
    email: document.querySelector("#emailRegistro").value,
    dir: document.querySelector("#dirRegistro").value,
    barrio: document.querySelector("#barrioRegistro").value,
    tel: document.querySelector("#telRegistro").value,
    rol: document.querySelector("#rolRegistro").value
  };

  //comparamos el valor, si es de asesora obtenemos la informacion necesaria para almacenarla
  if (obj.rol == "asesora") {
    obj.tallaBlusa = document.querySelector("#tallablusaRegistro").value;
    obj.tallaFalda = document.querySelector("#tallafaldaRegistro").value;
  }

  //comparamos el valor, si es de supervisor obtenemos la informacion necesaria para almacenarla
  if (obj.rol == "supervisor") {
    obj.tallaCamisa = document.querySelector("#tallacamisaRegistro").value;
    obj.tallaPantalon = document.querySelector("#tallapantalonRegistro").value;
    obj.placa = document.querySelector("#placamotoRegistro").value;
  }

  console.log("formData: ", obj);
}



//este cambio es para entender como funcionan las subidas de codigo
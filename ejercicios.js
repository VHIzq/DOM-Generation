const respuesta = document.querySelector("#respuesta");
const edadFunc = () => {
  const edadBtn = parseInt(document.querySelector("#edad").value);
  edadBtn >= 18 ? respuesta.textContent = "Eres mayor de edad" : respuesta.textContent = "Eres menor de edad";
};


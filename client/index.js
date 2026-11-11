const api = `${location.protocol}//${location.hostname}:8089/people`;
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const cuerpo = document.getElementById("cuerpo");

function fila(name) {
  const texto = document.createTextNode(name ?? "");
  const celda = document.createElement("td");
  const renglon = document.createElement("tr");
  celda.appendChild(texto);
  renglon.appendChild(celda);
  return renglon;
}

async function cargar() {
  const respuesta = await fetch(api);
  const personas = await respuesta.json();
  cuerpo.replaceChildren(...personas.map((persona) => fila(persona.name)));
}

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nombre.value }),
  });
  nombre.value = "";
  cargar();
});

cargar();

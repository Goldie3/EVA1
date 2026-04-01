var uiVisualizador = document.getElementById("miUiVisualizador");
var btns = document.querySelectorAll(".buttonPreview");
var closeBtns = document.querySelectorAll(".cerrar");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    uiVisualizador.style.display = "flex";
    uiVisualizador.style.alignItems = "center";
    uiVisualizador.style.justifyContent = "center";
    document.body.classList.add("visualizador-activo");
  });
});

function cerrarVisualizador() {
  uiVisualizador.style.display = "none";
  document.body.classList.remove("visualizador-activo");
}

closeBtns.forEach(function (span) {
  span.addEventListener("click", cerrarVisualizador);
});

window.addEventListener("click", function (event) {
  if (event.target === uiVisualizador) {
    uiVisualizador.style.display = "none";
  }
});
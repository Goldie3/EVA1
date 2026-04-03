var uiVisualizador = document.getElementById("miUiVisualizador");
var fondoVisualizador = document.querySelector(".fondovisualizador");
var btns = document.querySelectorAll(".botonMirar");
var closeBtns = document.querySelectorAll(".cerrar");
var video = uiVisualizador.querySelector("video");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var videoSrc = btn.dataset.video;
    video.src = "pagina/videos/" + videoSrc;
    video.load();
    fondoVisualizador.classList.add("activo");
    uiVisualizador.classList.add("activo");
    document.body.classList.add("visualizador-activo");
  });
});

function pausarVideo() {
    video.pause();
  }

function cerrarVisualizador() {
  uiVisualizador.classList.remove("activo");
  fondoVisualizador.classList.remove("activo");
  document.body.classList.remove("visualizador-activo");
  pausarVideo();
}

closeBtns.forEach(function (span) {
  span.addEventListener("click", cerrarVisualizador);
});

fondoVisualizador.addEventListener("click", function (event) {
  if (event.target === fondoVisualizador) {
    cerrarVisualizador();
  }
});
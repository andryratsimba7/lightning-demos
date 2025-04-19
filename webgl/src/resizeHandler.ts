document.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
  const canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

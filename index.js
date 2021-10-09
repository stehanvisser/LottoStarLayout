let root = document.documentElement;
let imageHeight = window.innerWidth * 0.122;
root.style.setProperty("--image-height", imageHeight + "px");

window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
  imageHeight = window.innerWidth * 0.122;
  root.style.setProperty("--image-height", imageHeight + "px");
}

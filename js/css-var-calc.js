let root = document.documentElement;
let imageHeight = Math.round(window.innerWidth * 0.122);
let bannerHeight = Math.round(window.innerWidth * 0.461);
root.style.setProperty("--image-height", imageHeight + "px");
root.style.setProperty("--banner-height", bannerHeight + "px");
root.style.setProperty("--form-top", bannerHeight * 0.59 + "px");

window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
  imageHeight = Math.round(window.innerWidth * 0.122);
  bannerHeight = Math.round(window.innerWidth * 0.461);
  root.style.setProperty("--image-height", imageHeight + "px");
  root.style.setProperty("--banner-height", bannerHeight + "px");
  root.style.setProperty("--form-top", bannerHeight * 0.59 + "px");
}

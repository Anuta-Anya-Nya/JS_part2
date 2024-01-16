const sliderImages = document.querySelector(".slider").querySelectorAll("img");
const sliderPoints = document.querySelectorAll('input[type="radio"]');
let visibleIndex = 0;

sliderPoints.forEach((point, index) => {
  point.addEventListener('click', ()=>{
    sliderImages[visibleIndex].style = "display: none";
    visibleIndex = index;
    sliderImages[visibleIndex].style = "display: block";
  })
});

document.querySelector("#prevImg").addEventListener("click", () => {
  sliderImages[visibleIndex].style = "display: none";
  if (visibleIndex === 0) {
    visibleIndex = sliderImages.length - 1;
  } else {
    visibleIndex--;
  }
  sliderImages[visibleIndex].style = "display: block";
  sliderPoints[visibleIndex].checked = true;
});

document.querySelector("#nextImg").addEventListener("click", () => {
  sliderImages[visibleIndex].style = "display: none";
  if (visibleIndex === sliderImages.length - 1) {
    visibleIndex = 0;
  } else {
    visibleIndex++;
  }
  sliderImages[visibleIndex].style = "display: block";
  sliderPoints[visibleIndex].checked = true;
});



